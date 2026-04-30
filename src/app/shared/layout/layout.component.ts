import { Component, signal, effect, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  menuOpen = signal(false);

  @ViewChild('hamburgerBtn') hamburgerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('navCloseBtn') navCloseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('overlayNav') overlayNav!: ElementRef<HTMLElement>;

  constructor() {
    effect(() => {
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
    if (this.menuOpen()) {
      setTimeout(() => this.navCloseBtn.nativeElement.focus(), 0);
    } else {
      this.hamburgerBtn.nativeElement.focus();
    }
  }

  closeMenu(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.hamburgerBtn?.nativeElement.focus();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('document:keydown.tab', ['$event'])
  onTab(event: Event): void {
    const e = event as KeyboardEvent;
    if (!this.menuOpen()) return;
    const nav = this.overlayNav?.nativeElement;
    if (!nav) return;
    const focusable = Array.from(
      nav.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}