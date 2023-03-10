import React from "react";
function Form ({inputText,setInputText,todos,setTodos}){
    //*her refresh olduğunda sayfadaki add buton unun refresh olmasını engellemek için
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()}]);
        setInputText("");
    }

const inputTodoHandler = (e)=>{
setInputText(e.target.value);
}

    return(
        <form>
        <div className="search">
            <input value={inputText} type="text" className="todo-input" placeholder="Add..." onChange={inputTodoHandler}/>
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-circle"></i>
            </button>
        </div> 

        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    )
}

export default Form;