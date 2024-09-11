import React,{UseId} from 'react'

const input = React.forwardRef(function input({
 label,
 type = "text",
 className = "",
 ...props 





},ref){

const id = UseId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
               {label}
                </label>
                
                }

                <input 
                type={type}
                className={`${className} outline-none w-full bg-transparent py-1.5`}
                ref={ref}
                {...props}
                id ={id} />


        </div>
    )
})




export default input
