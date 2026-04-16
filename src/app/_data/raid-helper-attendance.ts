import { players } from './players.data';

export interface RaidAttendanceResult {
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

export async function getRaidAttendance(eventId1: string, eventId2: string): Promise<RaidAttendanceResult> {
  const [event1, event2] = await Promise.all([fetchEvent(eventId1), fetchEvent(eventId2)]);

  const day1 = getDayOfWeek(event1.date);
  const day2 = getDayOfWeek(event2.date);

  const participating1 = new Set<string>();
  const absent1 = new Set<string>();
  for (const signup of event1.signups) {
    if (signup.class === 'Absence') {
      absent1.add(signup.userid);
    } else {
      participating1.add(signup.userid);
    }
  }

  const participating2 = new Set<string>();
  const absent2 = new Set<string>();
  for (const signup of event2.signups) {
    if (signup.class === 'Absence') {
      absent2.add(signup.userid);
    } else {
      participating2.add(signup.userid);
    }
  }

  const result: RaidAttendanceResult = {
    byDay: { [day1]: [], [day2]: [] },
    both: [],
    absent: [],
    unregistered: [],
  };

  for (const player of players) {
    const userId = player.discord?.userId;
    const canParticipate1 = !!userId && participating1.has(userId);
    const canParticipate2 = !!userId && participating2.has(userId);
    const isAbsent = !!userId && (absent1.has(userId) || absent2.has(userId));

    if (canParticipate1 && canParticipate2) {
      result.both.push(player.name);
    } else if (canParticipate1) {
      result.byDay[day1].push(player.name);
    } else if (canParticipate2) {
      result.byDay[day2].push(player.name);
    } else if (isAbsent) {
      result.absent.push(player.name);
    } else {
      result.unregistered.push(player.name);
    }
  }

  return result;
}

const id1 = '1493629842665640068';
const id2 = '1493629951667343472';

getRaidAttendance(id1, id2).then(result => {
  for (const [day, names] of Object.entries(result.byDay)) {
    console.log(`${day}: ${names.join(', ')}`);
  }
  console.log(`Both: ${result.both.join(', ')}`);
  console.log(`Absent: ${result.absent.join(', ')}`);
  console.log(`Unregistered: ${result.unregistered.join(', ')}`);
}).catch(error => {
  console.error(error);
})
