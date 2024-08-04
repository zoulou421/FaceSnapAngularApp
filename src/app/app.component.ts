import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
//import { RouterOutlet } from '@angular/router'; //to remove

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet], //to remove
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'myapp'; //to remove
}
