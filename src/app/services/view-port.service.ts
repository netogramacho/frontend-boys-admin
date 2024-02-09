import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

type viewPortSize = 'LG' | 'MD' | 'SM' | 'XS';

@Injectable({ providedIn: 'root' })
export class ViewPortService {
  private small = '(min-width: 768px) and (max-width: 992px)';
  private medium = '(min-width: 992px) and (max-width: 1200px)';
  private large = '(min-width: 1200px)';

  constructor(private breakpointObserver: BreakpointObserver) {}

  screenBreakpoint(): Observable<viewPortSize> {
    return this.breakpointObserver
      .observe([this.small, this.medium, this.large])
      .pipe(
        map((state: BreakpointState) => {
          if (state.breakpoints[this.large]) {
            return 'LG';
          }

          if (state.breakpoints[this.medium]) {
            return 'MD';
          }

          if (state.breakpoints[this.small]) {
            return 'SM';
          }

          return 'XS';
        })
      );
  }

  isMobile(): Observable<boolean> {
    return this.screenBreakpoint().pipe(map((viewPort) => viewPort === 'XS'));
  }
}
