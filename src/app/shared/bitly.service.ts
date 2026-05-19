import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BitlyService {
  private http = inject(HttpClient);

  shorten(longUrl: string): Observable<string> {
    const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/.test(longUrl);
    if (!environment.bitlyApiToken || isLocal) return of(longUrl);
    return this.http.post<{ link: string }>(
      'https://api-ssl.bitly.com/v4/shorten',
      { long_url: longUrl },
      { headers: { Authorization: `Bearer ${environment.bitlyApiToken}` } }
    ).pipe(
      map(r => r.link),
      catchError(() => of(longUrl))
    );
  }
}
