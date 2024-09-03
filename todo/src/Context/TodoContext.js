import{createContext , useContext} from "react"
export const TodoContext = createContext({

    todo:[

        { id: 1,
          todo: "mesg",
          completed:false,
        },
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{0},
    deleteTodo:(id)=>{},
    togalComplete:(id)=>{}
})



export const useTodo = () => {

return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider