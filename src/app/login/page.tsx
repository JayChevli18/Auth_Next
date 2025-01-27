"use client";
import Link from "next/link";
import React,{use, useState} from "react";
import { axios } from "axios";
import { useRouter } from "next/navigation";


export default function Login() {

    const [user, setUser]=useState({
        email:"",
        password:"",
    })

    const onLogin=async()=>{

    }

    return (
      <div className="flex flex-col items-center min-h-screen py-2 justify-center bg-gray-200">
        <h1 className="text-center">Login</h1>
        <hr />

        <label htmlFor="email">email</label>
        <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user, email:e.target.value})}
            placeholder="email"
            type="text"
        />


        <label htmlFor="password">password</label>
        <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="password"
            value={user.password}
            onChange={(e)=>setUser({...user, password:e.target.value})}
            placeholder="password"
            type="text"
        />

        <button
            className="p-2 border border-black rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            onClick={onLogin}
        >Login Here</button>

        <Link href="/login">Visit Signup page</Link>
      </div>
    );
  }
  