import React from 'react'

const validation = (user) => {
    console.log(user)

    let error={};
    if(!user.name){
        error.name="name is required."
    }
    if(!user.email){
        console.log('user.email>>>>>>>>>>',user.email)
        error.email="email is required."
    }else if(!/\s+@s+\.\s+/.test(user.email)){
        
    }

    if(!user.password){
        error.password="password is required."
    }else if(user.password.lenght <5){
        error.password="password must be more then five characteer."
    }
    return error;
//   return (    
//     <div>validation</div>
//   )
}

export default validation