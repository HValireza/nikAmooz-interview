import { useMutation,useQueryClient } from "react-query";
import { axiosApi } from "../helper/axios";
import { ToDoItem } from "../model/todoItem";

const createToDo = (item:ToDoItem)=>{
    return axiosApi.post(`todos`,{item});
};

export const useCreateToDo = () => {
    const queryClient = useQueryClient();
    return useMutation(createToDo, {
      onSuccess: () => {
        queryClient.invalidateQueries("get-todos");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  