import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-router-resolver';

  // Custom Loader Trigger
  isLoading$!: Observable<boolean>;
  constructor(private router: Router) { }

  ngOnInit() {
    // Custom Loader Trigger
    const loaderStart$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveStart),
      mapTo(true)
    )
    const loaderEnd$ = this.router.events.pipe(
      filter((event) => event instanceof ResolveEnd),
      mapTo(false)
    )
    this.isLoading$ = merge(loaderStart$, loaderEnd$)
  }
}
