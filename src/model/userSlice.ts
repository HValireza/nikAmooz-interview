export interface UserSlice{
    isLoggedIn : boolean;
    userInfo:{
        id:number;
        name:string;
        pictureUrl?:string;
    } | null;
}