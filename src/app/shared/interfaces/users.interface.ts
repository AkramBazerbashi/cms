export interface IUser {
    id?: number;
    username: string;
    email: string;
    password: string;
    accepted: boolean;
    access_date?: Date;
    hospitalId?: number;
    userType?:string;
    token ?:string;
    refreshToken ?:string;
    tokenCreated ?:string;
    tokenExpires ?:string;

}