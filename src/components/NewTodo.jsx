import { useRef } from "react"
import Input from "./Input"



const NewTodo = () => {
    const title = useRef()
    const description = useRef()
    const date = useRef()

    function handelSave() {


    }

    return (
        <section className="flex flex-col w-full mx-auto my-5 rounded-md border-2 p-2 border-stonre-400">
            <div className="flex gap-2 justify-between">
                <p className="font-bold">Add New Project</p>
                <div className="flex gap-2">
                    <button onClick={handelSave} className="text-red-300">Cancel</button>
                    <button onClick={handelSave} className="bg-green-600 rounded-md text-white px-3 rounde">Save</button>
                </div>
            </div>
            <Input ref={title}>Title</Input>
            <Input ref={description} textare>Description</Input>
            <Input ref={date}>Due Date</Input>
        </section>
    )

}


export default NewTodo