"use client"
import React from 'react'
import Registro from '../components/Registro'
import RegistroForm from '../components/RegistroForm'
import RegisterButton from '../components/RegisterButton'
import axios from '../../../axio/axios'

function page() {

    const handleSubmit = async (e, nombre, apellido, email, user, pwd) => {
        e.preventDefault();
        // if button enabled with JS hack
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        try {
            const response = await axios.post("/register",
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //     JSON.stringify({nombre, apellido, email, user, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            // setSuccess(true);
            //clear state and controlled inputs
            // setUser('');
            // setPwd('');
            // setNombre('')
            // setApellido('')
            // setEmail('')
            // setMatchPwd('');
        } catch (err) {
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            //     console.log('No serve Response')
            // } else if (err.response?.status === 409) {
            //     setErrMsg('Username Taken');
            //     console.log('Username Taken')
            // } else {
            //     setErrMsg('Registration Failed')
            //     console.log('Registration Failed')
            // }
            // errRef.current.focus();
            console.log(err)
        }
    }
    
  return (
    
    
            <RegistroForm >
                <RegisterButton handleSubmit={handleSubmit}/>
            </RegistroForm>
        
        
            
        
    
  )
}

export default page