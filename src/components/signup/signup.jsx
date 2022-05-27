import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addNewUser} from '../../redux/action/action'



export default function Signup() {
    
        const dispatch = useDispatch();
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState ('');
    
    
       const submitBtn = () =>{
        console.log('qqqqq');
         dispatch(addNewUser({name,email,password}))
    }
  return (
    <div>
    <header>
    <div className='logo'>
        <img src="/img/Logotasky_img.png" class="logo"/>
    </div>
    </header>
    <body>
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 mx-auto">
  
        <div class="row d-flex justify-content-center form-container">
            
            <div class="col">
                <div class="row px-1 justify-content-center  mb-5  image-signup">
                        <img src= "/img/Signin_img.png"  class="image"/>
                </div>
            </div>
            
            <div class="col">
                <div class="card2 card border-0 px-4 py-5">
                <div class="signuptitle">
                <h1>Not a task hero?</h1>
                <h3>Get tasky today!! What are you waiting for ?</h3>
                </div>
                <div class="inputs">
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Name yourself stranger</h6></label>
                        <input class="mb-4" type="text" name="name" placeholder="Throne Holder" required onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">We need an email to identify you</h6></label>
                        <input class="mb-4" type="email" name="email" placeholder="seeker@example.com" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Think of a password to seek passage</h6></label>
                        <input class="mb-4" type="password" name="password" placeholder="A secret key" required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Make sure to remember it</h6></label>
                        <input type="password" name="password" placeholder="Confirm your secret key"/>
                    </div>
                </div>    
                <div class="row mb-3 justify-content-center px-3">
                    <button type="submit" class="btn-purple text-center" onClick={()=> submitBtn()} > Let me in </button>
                </div>
                <div class="row mb-4 px-3">
                    <small class="font-weight-bold"> Already have an account? <Link to='/SignIn' ><a class="text-danger ">SignIn</a></Link></small>
                </div>
            </div>
            </div>
            </div>  
    </div>
    </body>
    </div>
  )
}

// export default Signup