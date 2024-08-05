import { Component, OnInit } from '@angular/core';
//import { FaceSnapComponent } from './face-snap/face-snap.component';
//import { FaceSnap } from './models/face-snap';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
//import { RouterOutlet } from '@angular/router'; //to remove

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet], //to remove
  imports: [
    //FaceSnapComponent,
    FaceSnapListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //title = 'myapp'; //to remove

 /* remove into list component

  faceSnap!:FaceSnap[];

  myFaceSnap!:FaceSnap
  myOtherFaceSnap!:FaceSnap
  myLastFaceSnap!:FaceSnap
  ngOnInit(): void {
    this.faceSnap=[
      new FaceSnap(
        "My title facesnap 1",
        "My description facesnap 1",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
         new Date(),
        0
      ),

      new FaceSnap(
        "My title facesnap 2",
        "My description facesnap 2",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
         new Date(),
        0
      ),
      new FaceSnap(
        "My title facesnap 3",
        "My description facesnap 3",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
         new Date(),
        0
      )
    ];
    this.faceSnap[0].setLocation("Dakar Senegal");*/

    /*this.myFaceSnap=new FaceSnap(
      "My title facesnap 1",
      "My description facesnap 1",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
       new Date(),
      0
    );
    this.myFaceSnap.setLocation("Canada, Toronto");

    this.myOtherFaceSnap=new FaceSnap(
      "My title facesnap 2",
      "My description facesnap 2",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
       new Date(),
      0
    );
    this.myOtherFaceSnap.setLocation("Dakar Senegal");

    this.myLastFaceSnap=new FaceSnap(
      "My title facesnap 3",
      "My description facesnap 3",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
       new Date(),
      0
    );
    this.myLastFaceSnap.setLocation("USA, DC Washington");*/
  //}

}
