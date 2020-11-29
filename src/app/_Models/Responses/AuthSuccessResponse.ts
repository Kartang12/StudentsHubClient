import { Subject } from '../Subject'

export class AuthSuccessResponse{
    Id: string
    Email: string
    Name: string
    Group: string
    Roles: string[]
    subjects: Subject[]
}