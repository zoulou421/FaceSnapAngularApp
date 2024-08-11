import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap;
 /* title!:string;
  description!:string |undefined;
  createdAt!:Date;
  snaps!:number;*/
  imageUrl:string |undefined;
  snapButtonText!:string;
  userHasSnapped!:boolean;
  myLargeNumber=4667916.76;
  myLargeNumberPercentage=0.3337;
  myPrice=336.15;

  constructor(private faceSnapService:FaceSnapsService){

  }

  ngOnInit(): void {
    /*this.title="My title facesnap";
    this.description="My description facesnap"
    this.createdAt=new Date();
    this.snaps=0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
     */
    this.snapButtonText="Snap liked";
   this.userHasSnapped=false;
  }
   /*onAddSnaps():void{
    this.snaps++;
    if(this.snaps>1){
      alert("Oops Snaps");
      this.snaps=0;
    }*/
   /*onAddOrRemoveSnap():void{
    this.snaps++;
     if(this.snaps>1){
      this.snaps=0;
      this.snapButtonText="Unliked Snap"
     }else{
      this.snapButtonText="Snap liked";
     }
   }*/
  onSnap(): void {
      if (this.userHasSnapped) {
        this.unSnap();
      } else {
        this.snap();
      }
    }
  
  /*unSnap() {
      this.faceSnap.RemoveSnap();
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = false;  
  }*/
    unSnap() {
        //this.faceSnap.RemoveSnap();
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"unsap");
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = false;  
    }
  
 /* snap() {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = true;
  }*/
      snap() {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id,"snap")
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = true;
    }

  
}
