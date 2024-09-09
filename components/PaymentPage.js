"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import Razorpay from 'razorpay'
import { initiate } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({username}) => {
    const { data: session } = useSession()
    
const [paymentform, setpaymentform] = useState({})

const handleChange =(e)=>{
    setpaymentform({...paymentform, [e.target.name]: e.target.value})
}
    const pay = async(amount)=>{
        let a = await initiate(amount, session?.user.name, paymentform)
        let orderId = a.id
        var options = {
        "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Get Me Funding", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `${process.env.URL}/api/razorpay`,
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    }
    var rzp1 = new Razorpay(options);
     rzp1.open();
}
  return (
    <>
     <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

<div className='cover bg-red-50 relative'>
      <img className='object-cover w-full h-[350px]' src="a.jpg" alt="" />
      <div className='absolute -bottom-12 right-[45%] border-white border-2 rounded-full'>
        <img className="rounded-full" width={150} height={150} src="b.jpg" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-20 flex-col gap-2 ">
    <div className="font-bold text-lg">
    @{username}
    </div>
    <div className='text-slate-400'>
        Creating Animated art for vit
    </div>

    <div className='text-slate-400'>
      5465 member, 82 post, $150/realse
    </div>

    <div className="payment flex gap-3 w-[80%] mt-11">
        <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
        <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className='mx-5'>
                <li className='my-4 flex gap-2 items-center'>
                  <img width={30} src="avatar.png" alt="" />
                  <span>
                  Raj donated <span className='font-bold'> $350 </span> with a message "I Support you With lots of ❤"
                  </span>
                  </li>
                <li className='my-4 flex gap-2 items-center'>
                  <img width={30} src="avatar.png" alt="" />
                  <span>
                  Raj donated <span className='font-bold'> $350 </span> with a message "I Support you With lots of ❤"
                  </span>
                  </li>
                <li className='my-4 flex gap-2 items-center'>
                  <img width={30} src="avatar.png" alt="" />
                  <span>
                  Raj donated <span className='font-bold'> $350 </span> with a message "I Support you With lots of ❤"
                  </span>
                  </li>
               
            </ul>
        </div>

        <div className="makepayement w-1/2  bg-slate-900 rounded-lg p-10 text-white">
        <h2 className="text-2xl font-bold my-5">Make a payment</h2>
        <div className="w-full mb-2">
          <input type="text" className="w-full p-2 mb-2 rounded-lg  text-white bg-slate-800" placeholder="Enter Name" onChange={handleChange} name="name" value={paymentform.name}/>

          <input type="text" className="w-full p-2 rounded-lg text-white bg-slate-800" name='message' placeholder="Enter Message" onChange={handleChange} value={paymentform.message}/>

        </div>
        <div className="flex gap-2">
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' name='amount' placeholder='Enter your Amount' onChange={handleChange} value={paymentform.amount}/>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 p-3 text-center me-2 ">Pay</button>
        </div>

        {/* or choose from these amount */}
        <div className="flex gap-2 mt-5">
        <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(1000)}>₹10</button>
        <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(2000)}>₹20</button>
        <button className='bg-slate-800 p-3 rounded-lg' onClick={()=>pay(3000)}>₹30</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PaymentPage
