import React from "react";

const AddProduct = () => {
  return (
    <div className="w-full mx-auto pl-4 pr-4 justify-items-center">
      <h2 className="text-2xl font-bold mb-4 pt-4">Add Product</h2>
      <form className="flex flex-wrap gap-4 w-full">
        <div className="w-full">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block font-bold mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="type" className="block font-bold mb-1">
                Type:
              </label>
              <input
                type="text"
                id="type"
                name="type"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="numberInput" className="block font-bold mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="numberInput"
            min="0"
            name="numberInput"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="w-full">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label htmlFor="numberInput" className="block font-bold mb-1">
                Debit:
              </label>
              <input
                type="number"
                id="numberInput"
                min="0"
                name="numberInput"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="numberInput" className="block font-bold mb-1">
                Credit:
              </label>
              <input
                type="number"
                id="numberInput"
                min="0"
                name="numberInput"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="numberInput" className="block font-bold mb-1">
            Difference:
          </label>
          <input
            type="number"
            id="numberInput"
            min="0"
            name="numberInput"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-fourth-color text-white font-bold py-2 px-4 rounded mt-4 mb-4"
        >
          {/* hover:bg-blue-700 */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
