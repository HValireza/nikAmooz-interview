import { useQuery } from "react-query";
import { axiosApi } from "../helper/axios";
import { ToDoItem } from "../model/todoItem";


const getAllToDo = async(userID:number)=> {
    return axiosApi.get<ToDoItem[]>(`users/${userID}/todos`);
};

export const useGetAllToDo = (userId:number) => {
    return useQuery<ToDoItem[] | any, Error>(['get-todos',userId], ()=>getAllToDo(userId),{
        onError:(err)=>{
            console.log(err);
        }
    })
}