export class User {
    id: string
    firstName: string
    lastName: string
    address: string
    phone: string
    email: string
    imageUrl: string
    role: Role
    authorized: boolean
}

export enum Role {
    ADMIN = 'ADMIN',
    RRHH = 'RRHH',
    SALES = 'SALES',
    CLIENT = 'CLIENT',
}