import React,{useEffect,useState} from 'react'
import "./Nav.css"
import logo from '../img/logo.png'

function Nav() {
    const [show,handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>500){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='logo'
           src={logo}
           alt='logo'
        />
       
        
    </div>
  )
}

export default Nav