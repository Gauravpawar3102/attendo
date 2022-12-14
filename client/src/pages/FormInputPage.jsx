import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import TeacherForm from '../components/Forms/TeacherForm';
import { useState } from 'react';
import StudentForm from '../components/Forms/StudentForm';
import ClassForm from '../components/Forms/ClassForm';

function FormInputPage() {
  const [state, setState] = useState(0);
  const next = () => {
    if (state >= 0 && state < 2) {
      setState(state + 1);
    }
  };

  const prev = () => {
    if (state > 1 && state < 3) {
      setState(state - 1);
    } else {
      setState(0);
    }
  };
  function DisplayMHForm(state) {
    switch (state) {
      case 0:
        return <TeacherForm />;
      case 1:
        return <ClassForm />;
      case 2:
        return <StudentForm />;

      default:
        return <TeacherForm />;
    }
  }
  return (
    <>
      <HomeNavbar />

      <div className="formpage-container flex flex-col items-center justify-center ">
        <div className="bg-blue-200 flex flex-col items-center justify-center p-2 max-h-full w-full max-w-2xl m-2">
          <div className="">{DisplayMHForm(state)}</div>

          <div className="Formbutton-container flex gap-4 ">
            <div
              className="left cursor-pointer bg-slate-400 px-2 py-1 font-mono font-semibold text-white"
              onClick={prev}
            >
              Back
            </div>
            <div
              className="left  bg-sky-400 px-2 py-1 font-mono font-semibold text-white cursor-pointer"
              onClick={next}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormInputPage;
