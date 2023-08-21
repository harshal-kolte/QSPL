import React from 'react'

function ClientList() {
  return (
    <div className="flex flex-column sm:w-5/6 bg-l-orange w-full h-screen p-5 pt-16">
      <div class=" overflow-x-auto w-full sm:rounded-lg">
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
  )
}

export default ClientList
