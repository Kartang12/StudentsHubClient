import { Subject } from '../Subject'

export class CreateUserRequest{
    Email : string
    Name: string
    Password: string
    Role: string
    FormId: string
    SubjectIds: string[]
}