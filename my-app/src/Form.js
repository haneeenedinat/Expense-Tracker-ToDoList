import React, { useState } from "react";
import List from "./List";
import './Form.css'

export default function Form (){


    const [Text,setText]=useState(null);
    const [ItemList,setItemList]=useState([]);
    


    const AddItemList =()=>{

      
        setItemList([...ItemList,{item:Text,key:Date.now()}]);
        setText("")
        console.log(ItemList)
    }


    return(
  

        <div>
            <h1>ToDoList</h1>
        <div className="ToDoList">
      
            <div>
         <input value={Text} onChange={(e)=>{setText(e.target.value)}}/>
         <button onClick={AddItemList}>+</button>
         <List ItemList={ItemList} setItemList={setItemList}/>
         </div>
        </div>
        
            </div>
       
    )

}