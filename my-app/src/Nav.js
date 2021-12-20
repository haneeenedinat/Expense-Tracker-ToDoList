import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav(){
    return(
        <div className="Nav">
           <Link to={'/Form'}><img src='ToDoList.png' alt='ToDoList' /></Link> 

            <ul>
                <li><Link to={'/Form'} >ToDoList</Link></li>
                <li><Link to={'/ExpenseTracker'} >ExpenseTracker</Link></li>
            </ul>
                     
        </div>
    )
}