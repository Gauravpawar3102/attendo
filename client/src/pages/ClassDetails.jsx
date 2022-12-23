import React from 'react';

function ClassDetails() {
  return (
    <div className=" flex justify-center items-center mt-4">
      <table className="table-auto ">
        <thead className="outline-dashed">
          <tr>
            <th className="px-4 py-2 capitalize">Name</th>
            <th className="px-4 py-2 capitalize">Roll Number</th>
            <th className="px-4 py-2 capitalize">status</th>
            <th className="px-4 py-2 capitalize ">email</th>
            <th className="px-4 py-2 capitalize">date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">data1</td>
            <td className="px-4 py-2">data1</td>
            <td className="px-4 py-2">data1</td>
            <td className="px-4 py-2">data1</td>
            <td className="px-4 py-2">data1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ClassDetails;
