export class ExcersiseAnswerRequest
{
    userId:string
    taskId:string
    answer:string

    constructor(uId:string, tId:string, ans:string){
        this.userId = uId
        this.taskId = tId
        this.answer = ans
    }
}