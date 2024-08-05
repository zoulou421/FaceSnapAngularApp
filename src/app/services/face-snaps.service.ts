import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    private faceSnap:FaceSnap[]=[
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
      getFaceSnaps():FaceSnap[]{
        return [...this.faceSnap]
      }
}