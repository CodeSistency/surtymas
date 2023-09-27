'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import React from 'react'

function page() {

    const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password)

    if (password === "" || username === "") {
    //   toast.error("Fill all fields!");
        console.error("Fill all fields!");
      return;
    }

    // if (password.length < 6) {
    //   toast.error("Password must be at least 6 characters long");
    //   return;
    // }

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res?.error == null) {
        router.push("/");
      } else {
        // toast.error("Error occured while logging");
        console.log("Error occured while logging")
      
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className='h-[100vh] flex justify-center items-center'>
    //   <div className='p-4 border-spacing-1'>
    //     <h2>Log In</h2>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //       className="text-black bg-white"
    //       style={{color: 'black'}}
    //         type="text"
    //         placeholder="Email..."
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //       <input
    //       className="text-black bg-white"
    //       style={{color: 'black'}}
    //         type="password"
    //         placeholder="Password..."
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <button className='bg-green-500 px-4 py-1 text-black'>Log in</button>
    //       {/* <Link className='flex items-center gap-2' href="/registro">
    //         Don&apos;t have an account? <br /> Register now.
    //       </Link> */}
    //     </form>
    //   </div>
    //   {/* <ToastContainer /> */}
    // </div>

    <section class="bg-gray-50 dark:bg-gray-900 lg:mt-[80px] sm:mt-[180px]">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Surtymas  
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Inicia sesion en tu cuenta
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu email</label>
                      <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} id="email"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Recordar</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidaste tu contraseña?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      No tienes cuenta aún? <Link href='/registro' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default page