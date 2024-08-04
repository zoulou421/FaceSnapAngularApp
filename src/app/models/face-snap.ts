export class FaceSnap{
    constructor(public title:string,public description:string,
        public imageUrl:string,public createdAt:Date,public snap:number){}

    addSnap():void{
        this.snap++;
    }

    RemoveSnap():void{
        this.snap--;
    }
}