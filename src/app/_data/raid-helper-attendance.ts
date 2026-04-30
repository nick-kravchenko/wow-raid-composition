import { players } from './players.data';

export interface RaidAttendanceResult {
  days: [string, string];
  byDay: Record<string, string[]>;
  both: string[];
  absent: string[];
  unregistered: string[];
}

interface RaidHelperSignup {
  userid: string;
  class: string;
}

interface RaidHelperEvent {
  date: string; // "DD-M-YYYY"
  signups: RaidHelperSignup[];
}

function getDayOfWeek(date: string): string {
  const [day, month, year] = date.split('-').map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString('en-US', { weekday: 'long' });
}

async function fetchEvent(eventId: string): Promise<RaidHelperEvent> {
  const response = await fetch(`https://raid-helper.xyz/api/event/${eventId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch event ${eventId}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function classifySingups(signups: RaidHelperSignup[]): { participating: Set<string>; late: Set<string>; tentative: Set<string>; absent: Set<string> } {
  const participating = new Set<string>();
  const late = new Set<string>();
  const tentative = new Set<string>();
  const absent = new Set<string>();
  for (const signup of signups) {
    if (signup.class === 'Absence') {
      absent.add(signup.userid);
    } else if (signup.class === 'Late') {
      late.add(signup.userid);
    } else if (signup.class === 'Tentative') {
      tentative.add(signup.userid);
    } else {
      participating.add(signup.userid);
    }
  }
  return { participating, late, tentative, absent };
}

export async function getRaidAttendance(eventId1: string, eventId2: string): Promise<RaidAttendanceResult> {
  const [event1, event2] = await Promise.all([fetchEvent(eventId1), fetchEvent(eventId2)]);

  const day1 = getDayOfWeek(event1.date);
  const day2 = getDayOfWeek(event2.date);

  const c1 = classifySingups(event1.signups);
  const c2 = classifySingups(event2.signups);

  const result: RaidAttendanceResult = {
    days: [day1, day2],
    byDay: {
      [day1]: [],
      [day2]: [],
      [`${day1} (late)`]: [],
      [`${day2} (late)`]: [],
      [`${day1} (tentative)`]: [],
      [`${day2} (tentative)`]: [],
    },
    both: [],
    absent: [],
    unregistered: [],
  };

  for (const player of players) {
    const id = player.discord?.userId;
    const p1 = !!id && c1.participating.has(id);
    const p2 = !!id && c2.participating.has(id);
    const l1 = !!id && c1.late.has(id);
    const l2 = !!id && c2.late.has(id);
    const t1 = !!id && c1.tentative.has(id);
    const t2 = !!id && c2.tentative.has(id);
    const a1 = !!id && c1.absent.has(id);
    const a2 = !!id && c2.absent.has(id);

    const positive1 = p1 || l1 || t1;
    const positive2 = p2 || l2 || t2;

    if (p1 && p2) {
      result.both.push(player.name);
      continue;
    }

    if (positive1 || positive2) {
      if (p1) result.byDay[day1].push(player.name);
      else if (l1) result.byDay[`${day1} (late)`].push(player.name);
      else if (t1) result.byDay[`${day1} (tentative)`].push(player.name);

      if (p2) result.byDay[day2].push(player.name);
      else if (l2) result.byDay[`${day2} (late)`].push(player.name);
      else if (t2) result.byDay[`${day2} (tentative)`].push(player.name);
    } else if (a1 || a2) {
      result.absent.push(player.name);
    } else {
      result.unregistered.push(player.name);
    }
  }

  return result;
}

const id1 = '1498059827874758868';
const id2 = '1498059922318037217';

getRaidAttendance(id1, id2).then(result => {
  for (const day of result.days) {
    for (const suffix of ['', ' (late)', ' (tentative)']) {
      const key = `${day}${suffix}`;
      const names = result.byDay[key];
      if (names?.length > 0) {
        console.log(`${key}: ${names.join(', ')}`);
      }
    }
  }
  console.log(`Both: ${result.both.join(', ')}`);
  console.log(`Absent: ${result.absent.join(', ')}`);
  console.log(`Unregistered: ${result.unregistered.join(', ')}`);
}).catch(error => {
  console.error(error);
});
