import React from "react";

import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex flex-column bg-first-color w-full h-screen">
      {/* <Sidebar selectedMenu="2" /> */}
      <div className="p-5 w-full">
        <div className="mb-4">
          <Link
            className="bg-fourth-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/addproduct"
          >
            Add Product
          </Link>
        </div>
        <table className="w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-second-color">
              <th className="py-3 px-6 text-left text-s font-semibold text-white uppercase border-b border-gray-200">
                Name
              </th>
              <th className="py-3 px-6 text-left text-s font-semibold text-white uppercase border-b border-gray-200">
                Type
              </th>
              <th className="py-3 px-6 text-left text-s font-semibold text-white uppercase border-b border-gray-200">
                Quantity
              </th>
              <th className="py-3 px-6 text-left text-s font-semibold text-white uppercase border-b border-gray-200">
                Debit
              </th>
              <th className="py-3 px-6 text-left text-s font-semibold text-white uppercase border-b border-gray-200">
                Credit
              </th>
              <th className="py-3 px-6 text-left text-s font-semibold text-white uppercase border-b border-gray-200">
                Difference
              </th>
            </tr>
          </thead>
          <tbody className="bg-first-color divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Product 1</td>
              <td className="py-4 px-6 border-b border-gray-200">
                Name of prodcut 1
              </td>
              <td className="py-4 px-6 border-b border-gray-200">Type 1</td>
              <td className="py-4 px-6 border-b border-gray-200">10</td>
              <td className="py-4 px-6 border-b border-gray-200">10</td>
              <td className="py-4 px-6 border-b border-gray-200">0</td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Product 2</td>
              <td className="py-4 px-6 border-b border-gray-200">
                Name of prodcut 2
              </td>
              <td className="py-4 px-6 border-b border-gray-200">Type 2</td>
              <td className="py-4 px-6 border-b border-gray-200">20</td>
              <td className="py-4 px-6 border-b border-gray-200">10</td>
              <td className="py-4 px-6 border-b border-gray-200">10</td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b border-gray-200">Product 3</td>
              <td className="py-4 px-6 border-b border-gray-200">
                Name of prodcut 3
              </td>
              <td className="py-4 px-6 border-b border-gray-200">Type 3</td>
              <td className="py-4 px-6 border-b border-gray-200">10</td>
              <td className="py-4 px-6 border-b border-gray-200">5</td>
              <td className="py-4 px-6 border-b border-gray-200">5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
