export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
     <div className="font-bold flex gap-2 justify-center items-center text-5xl">Buy Me A chai <span><img src="/tea.gif " width={70}    alt="" /></span></div>
     <p>A crowdfunding platefrom for creators. Get funded by your fans and followers. Start Now!</p>
     <div>
     <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
     <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
     </div>
    </div>

     <div className="bg-white h-1 opacity-10"></div>

     <div className="text-white container mx-auto pb-32 pt-14">
      <h1 className="text-2xl font-bold text-center mb-14"> Your Fans can buy a Chai</h1>    
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="./man.webp" alt="" />
            <p className="font-bold">Fouund Yourself</p>
            <p className="text-center">Your fans availble for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="./coinn.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans availble for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="./group.jpeg" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans availble for you to help you</p>
          </div>
        </div>   
      </div>

     <div className="bg-white h-1 opacity-10"></div>

     <div className="text-white container mx-auto pb-32 pt-14">
      <h1 className="text-2xl font-bold text-center mb-14"> Learn about us </h1>    
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="./man.webp" alt="" />
            <p className="font-bold">Fouund Yourself</p>
            <p className="text-center">Your fans availble for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="./coinn.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans availble for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className="bg-slate-400 rounded-full p-1 text-black" width={88} src="./group.jpeg" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans availble for you to help you</p>
          </div>
        </div>   
      </div>
    </>
  );
}
