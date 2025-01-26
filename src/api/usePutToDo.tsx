import { useMutation,useQueryClient } from "react-query";
import { axiosApi } from "../helper/axios";
import { ToDoItem } from "../model/todoItem";

const editToDo = (item:ToDoItem)=>{
    return axiosApi.put(`users/${item.userId}/todos/${item.id}`,item);
}

export const usePutToDo=()=>{
    const queryClient = useQueryClient();
  return useMutation(editToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-todos");
    },
  });
}