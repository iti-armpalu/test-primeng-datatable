import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppRouteList } from '../core/models/app-route-list';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuOpened = false;

  currentUrl: string;
  AppRoutesEnum = AppRouteList;
  routerEvents$: Observable<void>;

  constructor(readonly router: Router) {
    this.currentUrl = this.router.url;
    this.routerEvents$ = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((val) => {
        this.currentUrl = val.url;
        this.closeMenu();
      })
    );
  }

  openMenu(): void {
    this.menuOpened = true;
  }
  closeMenu(): void {
    this.menuOpened = false;
  }

  isExpanded(appRoutesEnum: string): boolean {
    return this.currentUrl.includes(appRoutesEnum);
  }

  ngOnInit(): void {
  }

}
