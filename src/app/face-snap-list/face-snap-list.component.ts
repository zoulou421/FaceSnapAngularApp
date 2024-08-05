import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnap!:FaceSnap[];

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
    this.faceSnap[0].setLocation("Dakar Senegal");

  }

}
