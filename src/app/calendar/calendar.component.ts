import { Component, OnInit } from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  months: {
    title: string;
    days: (null|Date)[];
  }[] = [];
  nullPointer: Date = new Date(2025, 1, 1);

  isOddLockout(date: null|Date): boolean {
    if (!date) {
      return false;
    }
    const diff = Math.round((date.getTime() - this.nullPointer.getTime()) / 1000 / 60 / 60 / 24);
    return (diff % 10) > 4;
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return today.getDate() === date.getDate() && today.getMonth() === date.getMonth() && today.getFullYear() === date.getFullYear();
  }

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 12; i++) {
      const days = this.generateMonth(i);
      const monthTitle = days.find(day => !!day)?.toLocaleString('default', { month: 'long' }) || '';
      this.months.push({
        title: monthTitle,
        days,
      });
    }
  }

  generateMonth(month: number): (null|Date)[] {
    const [year] = new Date().toISOString().split('T')[0].split('-').map(c => +c);
    const firstDayOfTheMonth = new Date(year, month - 1, 1);
    let m = firstDayOfTheMonth.getDay() ? new Array(firstDayOfTheMonth.getDay() - 1).fill(null) : [];
    for (let i = 1; i <= 40; i++) {
      const nextDay = new Date(year, month - 1, i);
      if (!m[m.length - 1] || nextDay.getMonth() === m[m.length - 1].getMonth()) {
        m.push(nextDay);
      }
    }
    if (m.length % 7) {
      m = m.concat(new Array(7 - m.length % 7).fill(null));
    }
    return m;
  }
}
