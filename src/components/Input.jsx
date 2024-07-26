import { forwardRef } from "react"



const Input = forwardRef(({ children, textare, ...props }, ref) => {

    const classes = "p-[5px] text-stone-500 rounded-md border-2 focus:outline-none border-stone-300 focus:border-stone-400"
    return (
        <div className="flex flex-col gap-1 py-4">
            <lable className="text-stone-500">{children}:</lable>
            {!textare ? <input ref={ref} placeholder={children} className={classes} /> :
                <textarea ref={ref} className={classes} />
            }
        </div>
    )
})

export default Input