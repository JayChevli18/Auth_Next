"use client";
import Link from "next/link";
import React,{useEffect, useState} from "react";
import  axios  from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


export default function Signup() {
    const router=useRouter();
    const [user, setUser]=useState({
        email:"",
        password:"",
        username:""
    })

    const [buttonDisabled, setButtonDisabled]=useState(false);
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
    },[user])

    const onSignup=async()=>{
        try{
            setLoading(true);
            const response=await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
        }
        catch(error:any){
            console.log("Signup Failed", error.message);
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return (
      <div className="flex flex-col items-center min-h-screen py-2 justify-center bg-gray-200">
        <h1 className="text-center">{loading ? "Processing":"Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            id="username"
            value={user.username}
            onChange={(e)=>setUser({...user, username:e.target.value})}
            placeholder="username"
            type="text"
        />

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
            type="password"
        />

        <button
            className="p-2 border border-black rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            onClick={onSignup}
        >{buttonDisabled ? "No Signup" : "Signup"}</button>

        <Link href="/login">Visit login page</Link>
      </div>
    );
  }
  