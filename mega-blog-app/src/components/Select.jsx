import React  ,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
     

    const Id = useId()

  return (
    <div className='w-full'>{label&& <label htmlFor={Id} className=''>
        </label>}
            <select 
            {...props}
            id={Id}
             ref={ref}   
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-100 border border-gray-300 w-full ${className}`}   >
                {options?.map((options)=>(

                    <option key = {options} value={options}>
                        {options}
                    </option>

                ))}
                

            </select>
        
         </div>
  )
}

export default React.forwardRef(Select)
Select
