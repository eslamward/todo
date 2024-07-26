

const Sidebar = () => {

    return (
        <aside className="
        w-1/3 h-full bg-slate-900 rounded-r-[25px]
         flex flex-col
        item-center p-5 text-white" >
            <h2 className=" flex
                border-b-2
                pb-2
                font-bold text-3xl mx-auto">
                TODO APP
            </h2>
            <button className="bg-slate-600 hover:bg-slate-500 px-5 py-2 mt-3
            rounded-md w-fit font-medium mx-auto">
                Add Todo +
            </button>
            <ul className=" flex flex-col gap-3 py-5 text-gray-400 ">
                <li className="hover:text-white cursor-pointer  ">
                    - Todo One
                </li>
                <li className="hover:text-white cursor-pointer ">
                    - Todo One
                </li>
            </ul>


        </aside>
    )
}

export default Sidebar