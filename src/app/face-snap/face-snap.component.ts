import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!:string;
  description!:string |undefined;
  createdAt!:Date;
  snaps!:number;
  imageUrl:string |undefined;
  snapButtonText!:string;

  ngOnInit(): void {
    this.title="My title facesnap";
    this.description="My description facesnap"
    this.createdAt=new Date();
    this.snaps=0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
   this.snapButtonText="Snap liked";
  }
   /*onAddSnaps():void{
    this.snaps++;
    if(this.snaps>1){
      alert("Oops Snaps");
      this.snaps=0;
    }*/
   onAddOrRemoveSnap():void{
    this.snaps++;
     if(this.snaps>1){
      this.snaps=0;
      this.snapButtonText="Unliked Snap"
     }else{
      this.snapButtonText="Snap liked";
     }
   }
   
}
