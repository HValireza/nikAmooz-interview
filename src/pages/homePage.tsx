import React from "react";
import LoginForm from "../components/loginForm";
import { useAppSelector } from "../redux/useAppSelector";
import UserPage from "../components/userPage";

const HomePage = ()=> {
    const {isLoggedIn} = useAppSelector((state)=>state.user);
    return(
        <div className="w-full">
            <p className="text-lg">NikAmooz</p>
            {isLoggedIn ? <UserPage/> : <LoginForm/>}
        </div>
    )
}

export default HomePage;