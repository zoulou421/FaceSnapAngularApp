import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{
    private faceSnaps:FaceSnap[]=[
        new FaceSnap(
          "My title facesnap 1",
          "My description facesnap 1",
          "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
           new Date(),
          0
        ).withLocation("Dakar, Teranga"),
  
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
        return [...this.faceSnaps]
      }
      snapFaceSnapByIdAdd(faceSnapId: string):void{
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.addSnap();
      }

      snapFaceSnapByIdRemove(faceSnapId: string):void{
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.removeSnap();
      }

      /*snapFaceSnapById(faceSnapId: string,snapType:SnapType):void{
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        foundFaceSnap.mySnap(snapType);
      }*/

        snapFaceSnapById(faceSnapId: string,snapType:SnapType):void{
          const foundFaceSnap = this.getFaceSnapById(faceSnapId);
          foundFaceSnap.mySnap(snapType);
        }

      getFaceSnapById(faceSnapId: string):FaceSnap{
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!foundFaceSnap) {
          throw new Error('FaceSnap not found!');
        }
        return foundFaceSnap;
      }
  }
      