export interface UserLogin{
    email: string
    pass: string
}
export interface UserSignup {
    email: string
    pass: string
    name: string,
    
    retypePass: string
}


export interface User{
    _id: string
    name: string
    email: string
    pass: string
    address: string
    phone: number
    role: string
}