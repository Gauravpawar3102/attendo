import React from 'react';

function ClassForm() {
  return (
    <div className="teacher-container">
      <div className="top-container">
        <div className="text text-3xl font-semibold">Create a Class</div>
      </div>
      <div className="bottom-container  flex flex-col items-center gap-4 my-4 ">
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Class Name"
        />
        <input
          className="outline-none px-2 py-1"
          type="text"
          placeholder="Teacher Id"
        />
      </div>
    </div>
  );
}

export default ClassForm;
