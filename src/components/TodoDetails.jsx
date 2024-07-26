
const TodoDetails = () => {

    return (
        <section>
            <h2 className="text-2xl w-fit font-serif border-b-2">Todo Titel</h2>
            <p className="my-5">Description</p>
            <p className="text-slate-500 border-b-2 pb-2">10/7/2024</p>
            <section className="mt-3">
                <h2 className="font-mono">Add Steps To Complete Your Todo</h2>
                <div className="border-2 mt-3 p-3 rounded-lg flex  items-center gap-1">
                    <label>Steps:</label>
                    <input className="foucs:outline-none
                    rounded-md font-mono
                    p-2 text-slate-400
                     border-2 border-slate-300
                     focus:border-slate-400 w-3/4" />
                    <button className="bg-green-500 w-1/4 p-2 rounded-md text-white">ADD</button>
                </div>
            </section>
            <ul className="mt-5 border-t-2 pt-4">
                <li className="flex justify-between py-3">
                    <p className="font-mono">Step 1</p>
                    <button className="text-green-600 font-mono">Clear</button>
                </li>
                <li className="flex justify-between py-3">
                    <p className="font-mono">Step 1</p>
                    <button className="text-green-600 font-mono">Clear</button>
                </li>
                <li className="flex justify-between py-3">
                    <p className="font-mono">Step 1</p>
                    <button className="text-green-600 font-mono">Clear</button>
                </li>
                <li className="flex justify-between py-3">
                    <p className="font-mono">Step 1</p>
                    <button className="text-green-600 font-mono">Clear</button>
                </li>
            </ul>
        </section>
    )
}

export default TodoDetails