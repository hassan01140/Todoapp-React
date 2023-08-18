import React from "react";

const ToDoList = (props)=>{
    return(
<>
<div className="todo_style">
<li>{props.text}</li>
<button className="delete" onClick={()=>{
props.select(props.id)

}}>Delete</button>
<button className="delete" onClick={()=>{
props.selectEdit(props.id)

}}>Edit</button>

</div>

</>


    )
}
export default ToDoList;