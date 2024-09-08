import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className='cover bg-red-50 relative'>
      <img className='object-cover w-full h-[350px]' src="a.jpg" alt="" />
      <div className='absolute -bottom-12 right-[45%] border-white border-2 rounded-full'>
        <img className="rounded-full" width={150} height={150} src="b.jpg" alt="" />
      </div>
    </div>
    <div className="info flex justify-center items-center my-20 flex-col gap-2 ">
    <div className="font-bold text-lg">
    @{params.username}
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
          <input type="text" className="w-full p-2 mb-2 rounded-lg  text-white bg-slate-800" placeholder="Enter Name"/>
          <input type="text" className="w-full p-2 rounded-lg text-white bg-slate-800" placeholder="Enter Message"/>
        </div>
        <div className="flex gap-2">
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter your Amount' />
        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 p-3 text-center me-2 ">Pay</button>
        </div>

        {/* or choose from these amount */}
        <div className="flex gap-2 mt-5">
        <button className='bg-slate-800 p-3 rounded-lg'>$10</button>
        <button className='bg-slate-800 p-3 rounded-lg'>$20</button>
        <button className='bg-slate-800 p-3 rounded-lg'>$30</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Username
