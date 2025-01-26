import { useCreateToDo } from "../api/useCreateToDo";
import { useFormik } from "formik";
const InputForm = () => {
    const {mutate} = useCreateToDo();
    const formik = useFormik({
            initialValues:{
                title:""
            },
            onSubmit:(values)=>{
              mutate(values);
            }
        })
    return(
        <div className="w-full flex justify-center items-center">
            <form className="flex flex-row gap-3" onSubmit={()=>createToDo()}>
                <input onChange={formik.handleChange} value={formik.values.title} type="text" name="todo" placeholder="add your TO DO!" required className="w-[320px] h-[40px] border-1 border-white rounded-md"/>
                <button type="submit" className="bg-white text-black px-2 py-1 rounded-md">submit</button>
            </form>
        </div>
    )
}

export default InputForm;