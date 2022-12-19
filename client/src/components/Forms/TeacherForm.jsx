import React from 'react';

function TeacherForm() {
  return (
    <div className="teacher-container">
      <div className="top-container">
        <div className="text text-3xl font-semibold">Create a Teacher</div>
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
          placeholder="Email"
        />
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Password"
        />
      </div>
    </div>
  );
}

export default TeacherForm;
