"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(()=>{
              if(!session) {
            router.push("/login")
        }
    },[router, session])

    const handleChange=(e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

  return (
    <>
     <div className="max-w-md mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">
    <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Welcome to Dashboard
    </div>
    <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
            <label className="  text-white block    font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input value={form.name?form.name:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name"/>
        </div>
        <div className="mb-4">
            <label className="  text-white block font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input value={form.email?form.email:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div className="mb-4">
            <label className="  text-white block  font-bold mb-2" htmlFor="username">
                UserName
            </label>
            <input value={form.username?form.username:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Enter username"/>
        </div>
        <div className="mb-4">
            <label className="  text-white block  font-bold mb-2" htmlFor="profile pic">
                Profile picture
            </label>
            <input value={form.profile?form.profile:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="profile" name='profile' type="text" />
        </div>
        <div className="mb-4">
            <label className="  text-white block  font-bold mb-2" htmlFor="coverpic">
                Cover pic
            </label>
            <input value={form.cover?form.cover:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="cover" name='cover' type="text" />
        </div>

        <div className="mb-4">
            <label className="  text-white block  font-bold mb-2" htmlFor="razorpayid">
                Razorpay Id
            </label>
            <input value={form.razorpayid?form.razorpayid:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="razorpayid" name="razorpayid"type="text" />      
        </div>


        <div className="mb-4">
            <label className="  text-white block  font-bold mb-2" htmlFor="razorpaysecert">
                Razorpay secert
            </label>
            <input value={form.razorpaysecert?form.razorpaysecert:""} onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                id="razorpaysecert" name="razorpaysecert" type="text" />      
        </div>

        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
               Save
            </button>
        </div>

    </form>
</div> 
    </>
  )
}

export default Dashboard
