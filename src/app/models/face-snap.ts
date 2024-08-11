import { SnapType } from "./snap-type.type";

export class FaceSnap{

    location?:string
    
    id:string;

    constructor(public title:string,public description:string,
        public imageUrl:string,public createdAt:Date,public snap:number){
            this.id=crypto.randomUUID().substring(0,8);
            console.log(this);
        }

    addSnap():void{
        this.snap++;
    }

    removeSnap():void{
        this.snap--;
    }

    setLocation(location?:string):void{
       this.location=location;
    }
    withLocation(location:string):FaceSnap{
        this.setLocation(location);
        return this;
    }

    mySnap(snapType:SnapType){
        if(snapType==="snap"){
          this.addSnap();
        }else if(snapType==="unsap"){
            this.removeSnap();
        }
      }
}