import { useState } from "react";
import './SearchBar.css'

function SearchBar({onSubmit}){
    const [term,setTerm]=useState("");

    const handleFormSubmit=(event)=>{
        //to prevent default behaviour of forms
        event.preventDefault();
        onSubmit(term)
    }
    const handleChange=(event)=>{
        setTerm(event.target.value)
    }
    return <div className="search-bar">
        <form  onSubmit={handleFormSubmit} action="">
            <label htmlFor="">Enter search term:</label>
            <input  value={term} onChange={handleChange} type="text" />
        </form>
    </div>
}
export default SearchBar;