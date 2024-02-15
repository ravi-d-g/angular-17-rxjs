import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, from, fromEvent, interval, map, scan, throttleTime } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ObservableComponent } from './observable/observable.component';
import { ObserverComponent } from './observer/observer.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OperatorsComponent } from './operators/operators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservableComponent, ObserverComponent, SubscriptionComponent, OperatorsComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-17-rxjs';



  ngOnInit() {



  }


}

