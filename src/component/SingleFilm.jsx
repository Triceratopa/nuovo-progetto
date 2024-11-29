import React, {useState} from "react";
import{ Dropdown} from 'react-bootstrap'
/*import '../component/SingleFiml.css'*/

const SingleFilm = ({img,movie})=>{
    const[open,setOpen] = useState(false);
     const toggleDropdown =()=> { /*creo la funzione per il dropdown da agganciare po*/
        setOpen(!open)
     }
return(
  <> <img src={img}
   alt='Movie'
   style={{width:'90%', height:'30%', objectFit:'cover'}}
   onClick={toggleDropdown}/>  
   {open && (
    <Dropdown.Menu className="bg-dark text-white">
      <Dropdown.ItemText>
        <strong>{movie.Title}</strong>
      </Dropdown.ItemText>
      <Dropdown.ItemText>
        <strong>{movie.Year}</strong> 
      </Dropdown.ItemText>
      <Dropdown.ItemText>
        <strong>{movie.Type}</strong> 
      </Dropdown.ItemText>
      <Dropdown.ItemText>
        <strong>{movie.Plot}</strong> 
      </Dropdown.ItemText>
      
    </Dropdown.Menu>
  )}</>)}
  /*non capisco il comportamento poichè compare, ma non compare*/

export default SingleFilm