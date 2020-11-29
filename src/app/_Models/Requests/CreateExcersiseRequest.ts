import { Subject } from '../Subject'

export class CreateExcersiseRequest
{
    title: string
    content: string
    correctAnswer: string   
    subject: Subject 
}