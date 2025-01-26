import { useAppSelector } from "../redux/useAppSelector";
import { useGetAllToDo } from "../api/useGetAllToDo";
import { ToDoItem } from "../model/todoItem";
import { useDeleteToDo } from "../api/useDeleteToDo";
import { usePutToDo } from "../api/usePutToDo";
const ToDoList = ()=> {
    const {userInfo} = useAppSelector((state)=>state.user);
    const {mutate : mutateDelete} = useDeleteToDo();
    const {mutate : mutatePut} = usePutToDo();
    const {data , isLoading, isSuccess} = useGetAllToDo(userInfo!.id);
    if(isLoading) return <p className="font-bold">Loading...</p>
    if(isSuccess && !data?.data.length)return <p className="font-bold">please enter your first to do!</p>
    return(
        <>
        {
            data?.data.map((toDo:ToDoItem,index:number)=>{
                return(
                    <div key={index} className="w-full flex flex-row justify-center items-center gap-2 border-1 rounded-md my-2 py-1">
                        <p>{toDo.title}</p>
                        {toDo.completed ? <p className="text-green-600">Done</p> : <p className="text-red-700">pending</p>}
                        <button className="bg-white text-black px-4 py-1 rounded-xl cursor-pointer" onClick={()=>mutatePut(item.title)}>Edit</button>
                        <button className=" bg-red-800 text-black px-4 py-1 rounded-xl cursor-pointer" onClick={()=>mutateDelete(item.id)}>Delete</button>
                    </div>
                )
            })
        }
        </>
    )
}

export default ToDoList;