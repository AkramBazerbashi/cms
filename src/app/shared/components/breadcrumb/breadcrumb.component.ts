import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { CreateBreadcrumb, IBreadcrumb } from '../../interfaces/breadcrumb.interface';

@Component({
  selector: 'ngx-breadcrumb',
  styleUrls: ['./breadcrumb.component.scss'],
  template: `
    <ul class="breadcrumb-list">
      <li *ngFor="let breadcrumb of breadcrumbs" class="breadcrumb-list__item">
        <a 
          (click)="navigateToPage(breadcrumb.url)"
          [routerLinkActiveOptions]="{exact: true}" 
          routerLinkActive="active"
          class="breadcrumb-list__item-title">
          {{breadcrumb.label}}
        </a>
      </li>
    </ul>
  `
})
export class BreadcrumbComponent implements OnInit, CreateBreadcrumb {
  public breadcrumbs: IBreadcrumb[];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
  ) { 
    this.breadcrumbs = this.createBreadcrumb(this.activatedRoute.root)
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd),
      distinctUntilChanged()
    )
    .subscribe(() => this.breadcrumbs = this.createBreadcrumb(this.activatedRoute.root));
  }

  public navigateToPage(pageLink: string): void {
    this.router.navigate([`./pages${pageLink}`]);
  }

  public createBreadcrumb(
    route: ActivatedRoute, 
    url: string = '', 
    breadcrumbs: IBreadcrumb[] = []
  ): IBreadcrumb[] {
    let label: string = this.getRouteLabel(route);
    let path: string = this.getRoutePath(route);
    const lastRoutePart: string = this.getLastRoutePart(path);

    if(this.isDynamicRoute(lastRoutePart)&&!!route.snapshot) {
      const paramName: string = this.getDynamicRouteParamName(lastRoutePart);
      const dynamicRouteParam: string = route.snapshot.params[paramName];
      path = path.replace(lastRoutePart, dynamicRouteParam);
      label = dynamicRouteParam;
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadcrumb = {
      label: label,
      url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [...breadcrumbs];

    return route.firstChild ?
      this.createBreadcrumb(route.firstChild, nextUrl, newBreadcrumbs) : 
      newBreadcrumbs;
  }

  private getRouteLabel(route: ActivatedRoute): string {
    return route.routeConfig?.data?.breadcrumb ? route.routeConfig.data.breadcrumb : "";
  }

  private getRoutePath(route: ActivatedRoute): string {
    return route.routeConfig?.data ? route.routeConfig.path : "";
  }

  private getLastRoutePart(path: string): string {
    return path.split('/').pop();
  }

  private getDynamicRouteParamName(lastRoutePart: string): string {
    return lastRoutePart.split(':')[1];
  }

  private isDynamicRoute(lastRoutePart: string): boolean {
    return lastRoutePart.startsWith(':');
  } 
}
