import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
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
                <h1>Let’s enter</h1>
                <h3>The tasks awaits us !!</h3>
                </div>
                <div class="inputs">
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">Hold!! what’s your email?</h6></label>
                        <input class="mb-4" type="email" name="email" placeholder="seeker@example.com"/>
                    </div>
                    <div class="row px-3">
                        <label class="mb-1"><h6 class="mb-0 text-sm">We seek your password</h6></label>
                        <input class="mb-4" type="password" name="password" placeholder="A secret key"/>
                    </div>
                </div>    
                <div class="row mb-3 justify-content-center px-3">
                    <button type="submit" class="btn-purple text-center" > <Link to='/Home'>Enter </Link> </button>
                </div>
                <div class="row mb-4 px-3">
                    <small class="font-weight-bold">Don't have an account? <Link to='/' ><a class="text-danger ">SignUp</a></Link></small>
                </div>
            </div>
            </div>
            </div>  
    </div>
    </body>
    </div>
  )
}
