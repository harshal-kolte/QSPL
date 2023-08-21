import React from 'react'

function SideBar() {
    const open=()=>{
        document.querySelector('.sidebar').classList.toggle('left-[-300px]')
    }
  return (
    <div className=' bg-l-orange'>
        
        {/* <div className='flex flex-col items-center px-5 h-16 py-4  bg-white '> */}
            <button className='absolute text-white px-4 py-5'  >
                <i class="fa-solid fa-bars bg-d-grey px-2 py-2 rounded-xl" onClick={open}></i>
            </button>
        {/* </div> */}
       <div className='sidebar fixed top-0 bottom-0 left-[-300px] lg:left-0  p-2 w-4/6 md:w-1/6 overflow-y-auto text-center bg-d-orange'>
            
            <div className='text-white text-xl'>
                <div className='p-2.5 mt-1 flex item-center' >
                    <i className="fa-solid fa-bars px-2 py-1 cursor-pointer bg-d-grey rounded-xl text-white " onClick={open}></i>
                    <h1 className='font-bold text-black text-[15px] ml-3 cursor-pointer'>Menu</h1>
                </div>
                <hr className='my-2 text-white'></hr>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white  '>
                <a href="/Dashboard">
                    <i className={`fas fa-columns px-2.5 py-5 cursor-pointer duration-75 rounded-full ` }></i>
                    <span className='text-[15px] ml-4 text-lg font-bold'>Dashboard</span>
                </a>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white'>
                <i className={`fa-solid fa-list px-2 py-5 cursor-pointer duration-75   rounded-full` } ></i>               
                <span className='text-[15px] ml-4 font-bold text-lg'><a href="/ClientList">Client-list</a></span>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white'>
                <a href="/AddClient"><i className={`fa-solid fa-address-card px-2.5 py-5 cursor-pointer duration-75   rounded-full` } ></i></a>
                <span className='text-[15px] ml-4 font-bold text-lg'><a href="/AddClient">Add Client</a></span>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white'>
                <a href=' /ClientInfo'><i className={`fa-solid fa-box-open px-2.5 py-5 cursor-pointer duration-75   rounded-full` }></i></a>
                <span className='text-[15px] ml-4 font-bold text-lg'><a href="/ClientInfo">Product</a></span>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white'>
                <a href=' /ClientInfo'><i className={`fa-solid fa-bag-shopping px-2.5 py-5 cursor-pointer duration-75   rounded-full` }></i></a>
                <span className='text-[15px] ml-4 font-bold text-lg'><a href="/ClientInfo">Order</a></span>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white'>
                <a href=' /ClientInfo'><i className={`fa-solid  fa-car px-2.5 py-5 cursor-pointer duration-75   rounded-full` }></i></a>
                <span className='text-[15px] ml-4 font-bold text-lg'><a href="/ClientInfo">Travel Plan</a></span>
            </div>
            <div className='p-2.5 mt-3 flex items-center rounded-md px-1 duration-300 cursor-pointer hover:bg-d-grey active:bg-d-grey text-black hover:text-white'>
                <a href="/Logout"><i className={`fa-solid fa-right-from-bracket px-2.5 py-5 cursor-pointer duration-75   rounded-full` }></i></a>
                <span className='text-[15px] ml-4 font-bold text-lg'><a href="/Logout">Log Out</a></span>
            </div>
        </div> 
    </div>
  )
}

export default SideBar
