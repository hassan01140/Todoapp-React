import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';
const App=()=> {

const [inputList, setInputList ] =useState("")
const [items, setItems ] =useState([])
const [editId, setEditId ] =useState(0)

let itemEvent=(e)=>{
setInputList(e.target.value)
}

let listOfItem =()=>{
if(!inputList){

}else{

  
    setItems((oldItems)=>{
    return[...oldItems,inputList];
  });
  setInputList("");
}
}

let deleteItems =(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrEle,i)=>{
return i !== id;
    })
  })
}

let editItems=(id)=>{
 
}

return (
    <>
    <div className="main_div">
    <div className="center_div">
<br/>
<h1>ToDo List</h1>
<input type="text" placeholder='Add a item' value={inputList} onChange={itemEvent} />
<button className='add' onClick={listOfItem}> Add </button>
<ol >
  {items.map((itemVal,index)=>{
  return (
    <ToDoList
     text={itemVal}
     key={index}
     id ={index}
     select ={deleteItems}
     selectEdit ={editItems}
  />
  )
  })}
</ol>
    </div>
    </div>
    </>
  );
}

export default App;
