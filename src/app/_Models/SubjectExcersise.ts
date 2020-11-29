import { Subject } from './Subject';
import { Excersise } from './Excersise';

export class SubjectExcersise{
    constructor(sub: Subject, ex: Excersise[]){
        this.subject = sub
        this.excersises = ex
    }
    subject: Subject
    excersises:Excersise[]
}