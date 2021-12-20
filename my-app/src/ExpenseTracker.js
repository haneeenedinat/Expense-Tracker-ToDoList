import React, { Profiler, useEffect, useState } from "react";
import List from "./List";
import './ExpenseTracker.css'

export default function ExpenseTracker(){

   const [Text,setText]=useState();
   const [number , setNumber]=useState('');
   const [ItemList,setItemList]=useState([]);
   const [Total,setTotal]=useState(0);
   const [income,setIncome]=useState(0);
   const [Expense,setExpense]=useState(0);

   const AddItemList=()=>{
       setItemList([...ItemList,{item:Text,key:Date.now(),number:number}]);
         
          if(number>0){
              setIncome(number+income)
          }

          else{   
              setExpense(number+Expense)
          }
         
         
           setTotal(Total+number)
      

       setText('')
       setNumber('')
       console.log(ItemList)
       console.log(number)

       
   }

   
    
    return(
               <>
        <h1>Expense Tracker </h1>
        <div className="ExpenseTracker">

        <div className="Title">
          
            <p>Total : {Total}.0 JD</p>
            <p>Income : {income}.0 JD</p>
            <p>Expense:  {Expense}.0 JD</p>
        </div>


        <div className="ExpenseTrackerList">
         
           <label>Text : {" "}
           <input type='text' value={Text} onChange={(e)=>{setText(e.target.value)}}/></label> {"  "}
           <label>Amount :  {" "}
           <input type='number' value={number} onChange={(e)=>{setNumber(Number(e.target.value))}}/></label>
           
           <button  onClick={AddItemList}>+</button>
       
           <List 
           ItemList={ItemList} 
           setItemList={setItemList} 
           number={number} 
            />
        </div>


        </div>
        </>
    )
} 