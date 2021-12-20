import ExpenseTracker from "./ExpenseTracker";
import Form from "./Form";
import Nav from "./Nav";
import './App.css'
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
    <Nav/>
    <div className="App">
     
     
      <Routes>
      <Route path={'/Form'} element={ <Form/>}/>
      <Route path={'/ExpenseTracker'} element={<ExpenseTracker/>}/>
    </Routes>
  

 
    </div>
    </>
  );
}

export default App;
