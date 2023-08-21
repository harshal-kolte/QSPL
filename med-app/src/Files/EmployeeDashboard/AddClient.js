import React from 'react'

function AddClient() {
    const Colour={
        backgroundColor:"#454545"
    }
  return (
    <div className=' overflow-hidden overflow-y-hidden px-2 sm:px-5 h-full w-full sm:w-5/6 sm:h-screen pt-3 sm:pt-3 pb-3 bg-l-orange ' >
        <div className='flex-direction:column sm:flex justify-between '>
            <div className='sm:py-2 sm:px-2  '>
                <h1 className='text-2xl text-black font-bold border-slate-700 rounded-xl py-2 text-center px-3 w-full sm:w-1/3 bg-d-orange '>Add Client</h1><br></br>
                <form className='py-2 px-2 mr-2 sm:overflow-y-scroll sm:h-3.5/6 '>
                
                    <div ><h1 className=' font-bold'>Full Name</h1>{/*//////////////////////////////////////////////////////////full name */}
                    <div className='py-3  flex justify-start'>
                    <div className=' w-full md:w-2/3'><input type='text'  placeholder="First Name" className="w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/></div>
                    <div className='px-2 w-full md:w-2/3'><input type='text'  placeholder="Last Name" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none  focus:ring focus:ring-grey-200 rounded"/></div>
                    </div></div>
                    <div className=' flex justify-start py-1 '>{/*//////////////////////////////////////////////////////////////email number */}
                        <div className=' '>
                            <h1 className="py-3 font-bold">Phone Number</h1>
                            <input type='text'  placeholder="Phone Number" name="Phone Number" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded " pattern="[0-9]+"/>
                        </div>
                        <div className='px-2 w-2/3'>
                            <h1  className="py-3 font-bold">Email</h1>
                            <input type='email'  placeholder="email" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                        </div>
                    </div>
                    <div className='flex justify-start py-1 '>{/*////////////////////////////////////////////////////////////DOB gender */}
                        <div  className='w-1/3'>
                            <h1 className="py-3 font-bold">Birth Date</h1>
                            <input type='date'  placeholder="MM-DD-YYYY" className=" w-full  mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded " pattern="[0-9]+"/>
                        </div>
                        <div className='py-3 px-2 w-2/4'>{/*///////////////////////////////////////////////////////gender */}
                            <label htmlFor="gender" className="block font-bold pb-3">
                                Gender:
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className="w-full p-2  border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                                required
                                >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                    </div>
                    <div  className=''>{/*/////////////////////////////////////////////////////////////////////////designation */}
                            <h1 className="py-3 font-bold"> Client Designation</h1>
                            <input type='text'  placeholder="Please  Enter Valid Designation" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                    </div> 
                    <div className='py-1'>{/*/////////////////////////////////////////////////////////////////////////clinic name*/}
                        <h1 className="py-3 font-bold">Clinic Name</h1>
                        
                        <input type='text'  placeholder="Clinic Name" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                    </div>
                    <div className='py-1'>{/*/////////////////////////////////////////////////////////////////////////Address */}
                        <h1 className="py-3 font-bold">Clinic Address</h1>
                        
                        <input type='text'  placeholder="Clinic Address" className="w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                        
                        <div className=' md:flex flex-direction:column space-y-2  justify-start md:justify-center py-3 ' >
                            <input type='text'  placeholder="City" className="md:w-1.5/6 w-full  mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                            <input type='text'  placeholder="State" className="md:w-1.5/6 w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                            <input type='text'  placeholder="Postal Code" className="md:w-1.5/6 w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded " pattern="[0-9]+" />
                        </div>
                    </div>
                   <div className='flex'>{/*/////////////////////////////////////////////////////////////////////////OPD */}
                        <div className='px-2 w-2/3'>
                                <h1  className="py-3 font-bold">OPD Time</h1>
                                <input type='text'  placeholder="Time" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                        </div>
                        <div className='px-2 w-2/3'>
                            <h1  className="py-3 font-bold">OPD Count/Day</h1>
                            <input type='number'  placeholder="Please enter correct OPD count" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                        </div>
                   </div>
                   <div className='flex'>{/*/////////////////////////////////////////////////////////////////////////region and PO */}
                        <div className='px-2 w-2/3'>
                            <h1  className="py-3 font-bold">Region</h1>
                            <input type='text'  placeholder="Region" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                        </div>
                        <div className='px-2 w-2/3'>
                            <h1  className="py-3 font-bold">PO Number</h1>
                            <input type='number'  placeholder="Enter valid PO number" className=" w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "/>
                        </div> 
                   </div>  
                   <br></br>   
                    <button type='submit' className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded border mx-auto w-full  float-none ">Add Client</button>
                </form>
            </div>
            <div className="w-full sm:w-1.5/3 items-center py-2 rounded-xl h-full sm:h-695 " style={{backgroundColor:"#ffa559" , paddingLeft:"2%" , paddingRight:"2%"}}>{/*/////////////////////////////////////////////////////////////////////////Right side */}
                <h1 className=' text-2xl text-white border-slate-700 rounded-xl py-2 text-center px-3  font-bold'  style={Colour}>Medicals stores near the clinic </h1>
                
                <div className='  border-2 border-black mt-4 rounded-md  bg-l-orange overflow-hidden overflow-y-scroll scrollbar-thin ' style={{height:"300px"}}>
                    <div className='font-bold mx-4'>
                    medical 1<br></br>
                    medical 1<br></br> 
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>medical 1<br></br>
                    </div>
                </div>
                
                <div className='text-center rounded-2xl mt-2 ' style={Colour}>
                    <form>
                        <label className='font-bold text-white '>Medical Name: </label>
                        <input type='text' className="md:w-1/3 w-3/2 mx-auto text-sm py-1 sm:py-2 px-3 rounded my-3" placeholder='Name of the Medical store'/>
                        <br></br>
                        <label className='font-bold  text-white'>Medical Address: </label>
                        <input type="text" className="md:w-1/3 w-3/2 mx-auto text-sm py-2 px-3 rounded my-3" placeholder='Medical Address'/>
                        <br></br>
                        <label className='font-bold  text-white'>Contact Number: </label>
                        <input type='number' className="md:w-1/3 w-3/2 mx-auto text-sm py-2 px-3 rounded my-3" placeholder='Phone Number'></input>
                        <br></br>
                        <button type='submit' className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded border block mx-auto w-1/3  float-none ">Add</button>
                        <br></br>
                    </form>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default AddClient
















