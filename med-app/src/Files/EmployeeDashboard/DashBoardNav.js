import React, { useState, useRef } from 'react';

function DashBoardNav(props) {
  const Menu = [props.name, props.email];
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className=' w-full sm:w-5/6  h-screen bg-l-orange'>
      <div className='md:px-5 w-full px-2 pt-1 '>
      <nav
        className={`   rounded-2xl    bg-d-orange ${
          open ? 'h-16' : ''
        }`}
        
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around md:justify-between mx-auto  ml-4 md:mr-4 pt-3 md:px-2 px-5 pb-3">
          <div className=" flex md:w-3/4 ">
            {/*searchbar*/}
            
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            <button type="submit" className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-950 rounded-lg border border-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
            
          </div>
          <div className="flex-col justify-center relative">
            <div>
              <button
                onClick={toggleDropdown}
                className="relative"
                ref={dropdownRef}
              >
                <i className="fa-solid fa-user h-10 w-10 object-cover border-2 text-white border-gray-300 px-2 py-2 rounded-full cursor-pointer" style={{backgroundColor:"#454545"}}></i>
              </button>
            </div>
            {open && (
              <div
                className=" p-4 w-52 shadow-2xl rounded-lg text-center absolute top-5 right-0 bg-d-orange"
                style={{
                  transform: `translateY(${
                    dropdownRef.current?.offsetHeight || 0
                  }px)`,
                }}
              >
                <ul>
                  {Menu.map((menu) => (
                    <li
                      className="block text-sm text-gray-900  text-left cursor-pointer font-bold rounded p-2 active:bg-d-grey hover:bg-d-grey hover:text-white active:text-white"
                      key={menu}
                    >
                      {menu}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="py-20 md:w-full w-full">
        {/* <table className="table-fixed w-full  border border-slate-500">
          
        </table> */}
        
        <div class=" overflow-x-auto  sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Client
                        </th>
                        <th scope="col" class="px-6 py-3">
                            No. of Order
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Purchase Id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            More Info.
                        </th>
                    </tr>
                </thead>
                <br></br>
                <tbody>
                    <tr class=" border-b-2 border-gray-300   bg-l-orange  text-gray-900">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                            Client 1
                        </th>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            Pending
                        </td>
                        <td class="px-6 py-4">
                            12345
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-800 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class=" border-b-2 bg-l-orange border-gray-300  text-gray-900">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                            Client 1
                        </th>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            Pending
                        </td>
                        <td class="px-6 py-4">
                            12345
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-800 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class=" border-b-2 bg-l-orange border-gray-300  text-gray-900">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                            Client 1
                        </th>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            Pending
                        </td>
                        <td class="px-6 py-4">
                            12345
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-800 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class=" border-b-2 bg-l-orange border-gray-300  text-gray-900">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                            Client 1
                        </th>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            Pending
                        </td>
                        <td class="px-6 py-4">
                            12345
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-800 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class=" border-b-2 bg-l-orange border-gray-300  text-gray-900">
                        <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                            Client 1
                        </th>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            Pending
                        </td>
                        <td class="px-6 py-4">
                            12345
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-800 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
      
    </div>
    </div>
  );
}

export default DashBoardNav;
















































// import React, {  useState } from 'react'

// function DashBoardNav(props) {
//     const Menu=[props.name,props.email]
//     const [open, setOpen]=useState(false)

   
//   return (

//     <div>
//         <nav className=" bg-white border-gray-200 dark:bg-gray-900" style={{backgroundColor:"#ffa559"}}>
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                
//                 <div className="relative md:w-3/4">  {/*searchbar*/}
//                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                         <i className="fa-solid fa-magnifying-glass" onClick={()=>setOpen(!open)}></i>
//                     </div>
//                     <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
//                 </div>
//                 <div className="flex-col justify-center  ">
//                     <div>
//                         <button onClick={()=>setOpen(!open)}><i className="fa-solid fa-user  h-8 w-8 object-cover border-2 border-gray-300 px-2 py-2 rounded-full cursor-pointer bg-slate-500"></i></button>
//                     </div>
//                     {
//                         open &&
                    
//                         (<div className='bg-white p-4 w-52 shadow-lg rounded-lg text-center'>
//                             <ul>
//                                 {
//                                     Menu.map((menu)=>(
//                                         <li className='block text-sm text-gray-900 dark:text-white text-left cursor-pointer rounded p-2 hover:bg-blue-300 ' key={menu}>{menu}</li>
//                                     ))
//                                 }
//                             </ul>
//                         </div>)
//                     }
//                 </div>
//             </div> 
            
//         </nav>    
          
       
        
//     </div>

  
    
    

//   )
// }

// export default DashBoardNav






{/* // <div >
    //     <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //         <a href="https://flowbite.com/" className="flex items-center">
    //             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
    //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //         </a>
    //         <div className="flex md:order-2">
    //             <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
    //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    //             </svg>
    //             <span className="sr-only">Search</span>  {/*search logo on small screen*/}
    //             </button>
    //             <div className="relative hidden md:block">  {/*searchbar*/}
    //             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                 <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    //                 </svg>
    //                 <span className="sr-only">Search icon</span>
    //             </div>
    //             <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    //             </div>
    //             <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
    //                 <span className="sr-only">Open main menu</span>
    //                 <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //                 </svg>
    //             </button>    {/*Hamburger*/}
    //         </div>
    //             <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
    //             <div className="relative mt-3 md:hidden">
    //                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    //                 <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    //                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    //                 </svg>
    //                 </div>
    //                 <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
    //             </div>
    //             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //                 <li>
    //                 <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
    //                 </li>
    //                 <li>
    //                 <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
    //                 </li>
    //             </ul>
    //             </div>
    //         </div>
    //     </nav>
    //     <div className='w-full h-full bg-slate-500'>
    //         gsdfhjkljhgftrdefsdwaqw<br></br>
    //         afsdgfdg<br></br>
    //         afedsgf<br></br>
    //         asfdfgasdfg<br></br>
    //         asfdfgasdfgfgh<br></br>
    //         asdfasxdfgh<br></br>
    //         jqswderfgt<br></br>
    //         dsfghewrtyu<br></br>
    //         asdfasxdfghwdefrgty<br></br>
    //         asdfgrt5yu<br></br>
    //         asdfghert5y<br></br>

    //     </div>
    // </div> */}
