import React from "react";

const AddEmployee = () => {
  return (
    <div className="w-full px-2 sm:w-5/6  pt-3 justify-items-center scrollbar-hidden bg-l-orange h-full md:h-full">
      <div className="sm:py-2 sm:px-2">
        <h2 className="text-2xl text-black font-bold border-slate-700 rounded-xl py-2  text-center px-3 w-full sm:w-1/3 bg-d-orange">
          Add Employee
        </h2>

        <form className=" w-full py-6">
          <div className="flex flex-col md:flex-row justify-between  ">
            <div className="w-full p-2">
              {/*////////////////////////////////////////////////////////////////left part */}
              <div className="w-full pb-2">
                {/*////////////////////////////////////////////////////////////////name */}
                <label htmlFor="name" className="block font-bold mb-1">
                  Name:
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="First name"
                    className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                    required
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Last name"
                    className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                    required
                  />
                </div>
              </div>
              <div className="w-full pb-2">
                {/*////////////////////////////////////////////////////////////////email */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="email" className="block font-bold mb-1">
                      Personal Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Personal email"
                      name="email"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="email" className="block font-bold mb-1">
                      Company Email:
                    </label>
                    <input
                      type="email"
                      id="comemail"
                      placeholder="Company email"
                      name="comemail"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="w-full pb-2">
                {/*////////////////////////////////////////////////////////////////DOB and gender*/}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="birthdate" className="block font-bold mb-1">
                      Birth Date:
                    </label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="gender" className="block font-bold mb-1">
                      Gender:
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="w-full pb-2">
                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="address" className="block font-bold mb-1">
                      Current Address:
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    ></textarea>
                    <div className=" md:flex flex-direction:column space-y-2  justify-start md:justify-center py-3 ">
                      <input
                        type="text"
                        placeholder="City"
                        className="md:w-1.5/6 w-full  mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="md:w-1.5/6 w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                      />
                      <input
                        type="text"
                        placeholder="Postal Code"
                        className="md:w-1.5/6 w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                        pattern="[0-9]+"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                {/*/////////////////////////////////////////////////////////////////////////Address */}
                <div className="flex gap-4">
                  <div className="w-full">
                    <label htmlFor="address" className="block font-bold mb-1">
                      Permanent Address:
                    </label>
                    <textarea
                      id="peraddress"
                      name="peraddress"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                      required
                    ></textarea>
                    <div className=" md:flex flex-direction:column space-y-2  justify-start md:justify-center py-3 ">
                      <input
                        type="text"
                        placeholder="City"
                        className="md:w-1.5/6 w-full  mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                      />
                      <input
                        type="text"
                        placeholder="State"
                        className="md:w-1.5/6 w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                      />
                      <input
                        type="text"
                        placeholder="Postal Code"
                        className="md:w-1.5/6 w-full mx-auto text-sm py-2 px-3 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded "
                        pattern="[0-9]+"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2">
              {/*////////////////////////////////////////////////////////////////Right part */}
              <div className="w-full pb-2">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="phone" className="block font-bold mb-1">
                      Phone No. :
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone no."
                      pattern="[0-9]{10}"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="phone" className="block font-bold mb-1">
                      Alternate Phone No. :
                    </label>
                    <input
                      type="tel"
                      id="altphone"
                      name="altphone"
                      placeholder="Other Phone no."
                      pattern="[0-9]{10}"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="w-full pb-2">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label htmlFor="aadhar" className="block font-bold mb-1">
                      Aadhar Number:
                    </label>
                    <input
                      id="aadhar"
                      name="aadhar"
                      placeholder="Aadhar No."
                      pattern="[0-9]{10}"
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="pan" className="block font-bold mb-1">
                      PAN Number:
                    </label>
                    <input
                      id="pan"
                      name="pan"
                      placeholder="PAN no."
                      className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                      required
                    />
                  </div>
                </div>
                <br></br>
              </div>
              <div className="bg-d-orange p-3 rounded-lg h-[400px]">
                <center className="pt-4">
                  <h2 className="text-2xl w-1/2 font-bold text-white bg-d-grey  text-center rounded-xl py-5 px-3 ">
                    Bank Details
                  </h2>
                </center>
                <div className="w-full pt-5 pb-4">
                  <label className="block font-bold mb-1 ">Bank Name</label>
                  <input
                    id="account"
                    name="acount"
                    pattern="[0-9]{10}"
                    className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                    required
                  />
                </div>
                <div className="w-full pb-4">
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block font-bold mb-1">
                        Account Number:
                      </label>
                      <input
                        id="account"
                        name="acount"
                        pattern="[0-9]{10}"
                        className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block font-bold mb-1">IFSC Code:</label>
                      <input
                        id="ifsc"
                        name="ifsc"
                        className="w-full p-2 border-solid border-2 border-black focus:outline-none focus:ring focus:ring-grey-200 rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
                <label
                  className="block mb-2 text-sm  font-bold text-gray-900"
                  for="file_input"
                >
                  Upload Passbook / Cheque Photo
                </label>
                <input
                  className="block w-full text-sm  border-solid border-2 border-black rounded-lg cursor-pointer bg-d-grey text-white"
                  id="file_input"
                  type="file"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center  px-2">
            {/*////////////////////////////////////////////////////////////////submit button */}
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 w-3/4 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
            >
              {/* hover:bg-blue-700 */}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
