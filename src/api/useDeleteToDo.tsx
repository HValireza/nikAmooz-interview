import { useMutation, useQueryClient } from "react-query";
import { axiosApi } from "../helper/axios";

const deleteToDo = (itemId:number)=>{
    return axiosApi.delete(`/todos/${itemId}`);
}

export const useDeleteToDo = ()=>{
    const queryClient = useQueryClient();
  return useMutation(deleteToDo, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-todos");
    },
  });
}