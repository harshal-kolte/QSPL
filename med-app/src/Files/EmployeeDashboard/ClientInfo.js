import React from 'react'

function ClientInfo(props) {
  const Colour={
    backgroundColor:"#454545"
  }
  return (
    <div className='w-full sm:w-5/6 overflow-x-hidden sm:h-screen h-full min-h-full' style={{background:"#ffe6c7"}}>
      <div className=' h-auto px-3 sm:px-10 py-16 sm:py-5 flex-direction:column sm:flex justify-around  sm:space-x-5'>
            <div className=' justify-items-center px-3 py-3 rounded-xl w-full sm:w-1/4' style={{backgroundColor: "#ffa559"}}>{/*/////////////////////////////////first div */}
                <h1 className='text-2xl text-white border-slate-700 rounded-xl py-2 text-center px-3  ' style={Colour}>Client Information</h1>
                <br></br>
                <p className='border-slate-700 text-white rounded-xl py-2 text-3xl px-3 text-center font-bold ' style={Colour}>{props.name}</p>
            </div>
            <br></br>
            <div className='justify-items-center px-3 py-3  rounded-xl w-full md:w-1.5/4  ' style={{backgroundColor: "#ffa559"}}>{/*/////////////////////////////////Second div */}
                <h1 className='  text-white border-slate-700 rounded-xl py-2  px-3 text-2xl text-center ' style={Colour}>Contact Information</h1>
                <br></br>
                <div className='flex justify-start '>
                  <div>
                    <h1 className= '  py-2 text-lg px-3  '>Email: </h1>
                  </div>
                  <div>
                    <h1 className= '  border-slate-700 text-white rounded-xl w-48 scrollbar-thin overflow-x-auto  py-2 text-lg px-3 font-bold text-center ' style={Colour}>{props.Email}</h1>
                  </div>
                </div>
                <div className='flex justify-start py-2'>
                  <div>
                    <h1 className= '  py-2 text-lg px-3  '>Phone: </h1>
                  </div>
                  <div>
                    <h1 className= '  border-slate-700 text-white rounded-xl py-2 text-lg px-3 font-bold text-center' style={Colour}>{props.phone}</h1>
                  </div>
                </div>
                {/* Email : <h1 className= '  border-slate-700 text-white rounded-xl py-2 text-lg px-3 font-bold ' style={Colour}>{props.Email}</h1> */}
                {/* Phone : <h1 className='  border-slate-700 text-white rounded-xl py-2 text-lg px-3 font-bold ' style={Colour}> {props.phone}</h1> */}
            </div>
            <br></br>
            <div className='justify-items-center px-3 py-3 rounded-xl w-full sm:w-1/4' style={{backgroundColor: "#ffa559"}}>{/*/////////////////////////////////third div */}
                <h1 className='text-2xl text-white border-slate-700 rounded-xl py-2  px-3 text-center ' style={Colour}>Total Number of Orders</h1>
                <br></br>
                <div className='flex justify-center' ><p className="border-slate-700 text-white rounded-xl py-2 text-3xl px-2 text-center font-bold w-1/3"style={Colour}>{props.order}</p></div>
            </div>

      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Searchbar */}
      <div className='flex  justify-right sm:px-5 px-2 '>
          <form className='w-full flex justify-around'>
              
            <div className=" flex sm:w-2/4 w-1.5/4 ">
              {/*searchbar*/}
              
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 sm:pl-10 pl:2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <button type="submit" className="p-2.5 ml-1 text-sm font-medium text-white bg-blue-950 rounded-lg border border-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
              
            </div>
            <div>
              <button className='bg-d-orange p-2 rounded-md font-bold'>
                <i class="fa-solid fa-plus px-2"></i>
                Add
              </button>
            </div>
            <div>
              <button className='bg-d-orange p-2 rounded-md font-bold'>Edit Medicals</button>
            </div>
          </form>
      </div>
      <br></br><br></br>
      
     {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Table */}
        <div class="flex flex-col h-[350px] px-5 ">
        <div class="flex-grow overflow-auto overflow-x-auto scrollbar-thin rounded-lg">
        <table class=" w-full  text-sm text-left text-gray-500 dark:text-gray-400">
            <thead >
            <tr>
                <th class="sm:sticky top-0 px-6 py-3 uppercase bg-d-grey text-white">Product</th>
                <th class="sm:sticky top-0 px-6 py-3 uppercase bg-d-grey text-white">Quantity</th>
                <th class="sm:sticky top-0 px-6 py-3 uppercase bg-d-grey text-white">Date</th>
                <th class="sm:sticky top-0 px-6 py-3 uppercase bg-d-grey text-white">Status</th>
                <th class="sm:sticky top-0 px-6 py-3 uppercase bg-d-grey text-white">Purchase ID</th>
                <th class="sm:sticky top-0 px-6 py-3 uppercase bg-d-grey text-white">Remove</th>
            </tr>
            </thead>
            <tbody class="divide-y ">
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className=' border-b-2 border-gray-300   bg-l-orange  text-gray-900'>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                        Product 1
                    </th>
                    <td class="px-6 py-4">
                        10
                    </td>
                    <td class="px-6 py-4">
                        DD-MM-YYYY
                    </td>
                    <td class="px-6 py-4">
                        Pending
                    </td>
                    <td class="px-6 py-4">
                        12345
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-800 hover:underline">Delete</a>
                    </td>
                </tr>
           </tbody>
        </table>
        </div>
        </div>
      
    </div>
  )
}

export default ClientInfo
