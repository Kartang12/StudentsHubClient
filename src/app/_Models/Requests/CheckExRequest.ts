export class CheckExRequest{
    exId:string
    uId:string

    constructor(str1:string, str2:string){
        this.exId = str1
        this.uId = str2
    }
}