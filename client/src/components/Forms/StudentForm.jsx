import React from 'react';

function StudentForm() {
  return (
    <div className="teacher-container">
      <div className="top-container">
        <div className="text text-3xl font-semibold">Enter Student Details</div>
      </div>
      <div className="bottom-container  flex flex-col items-center gap-4 my-4 ">
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Name"
        />
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Roll Number"
        />
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Class Id"
        />
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Email"
        />
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Status"
        />
      </div>
    </div>
  );
}

export default StudentForm;
