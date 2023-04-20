import React, { useState } from 'react'

function Login() {
    const[name,SetName]= useState();
    const[email,SetEmail]= useState();

    const sendData = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var data = JSON.stringify({
        "name": name,
        "email": email
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
        };

        fetch("http://localhost:4000/registerguest", requestOptions)
        .then(response => response.text())
        .then(result => {
            alert(result);
            console.log(result);
        })
        .catch(error => console.log('error', error));
    }
  return (
    <div className='App' style={{marginLeft:"200px"}}>
        <form onSubmit={(e)=>sendData(e)}>
            <input 
                type='text'
                placeholder='name'
                value={name}
                onChange={(e)=>{SetName(e.target.value)}}
             />

             <br/>
             <br/>
             <input 
                type='text'
                placeholder='email'
                value={email}
                onChange={(e)=>{SetEmail(e.target.value)}}
             />
             <br/>
             <br/>
             <button>SendData</button>
        </form>
    </div>
  )
}

export default Login