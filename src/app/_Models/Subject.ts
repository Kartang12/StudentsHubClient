import { Form } from './Form'

export class Subject
{
    constructor(id: string, name: string){
        this.id = id
        this.name = name
    }

    id: string
    name: string
    form: Form
}