import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit {

  intervalObservable: string = '';
  eventObservable: string = '';
  ngOnInit() {

    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    const subscription = secondsCounter.subscribe(n => {
      this.intervalObservable = `It's been ${n + 1} seconds since subscribing!`;
      // console.log(`It's been ${n + 1} seconds since subscribing!`)
    }


    );



    const el = document.getElementById('my-element')!;

    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

    // Subscribe to start listening for mouse-move events
    const subscription1 = mouseMoves.subscribe(evt => {
      // Log coords of mouse movements

      this.eventObservable = `Coords: ${evt.clientX} X ${evt.clientY}`
      // console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription1.unsubscribe();
      }
    });
  }

}
