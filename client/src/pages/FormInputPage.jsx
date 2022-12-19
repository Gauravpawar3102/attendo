import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import TeacherForm from '../components/Forms/TeacherForm';
import { useState } from 'react';
import StudentForm from '../components/Forms/StudentForm';
import ClassForm from '../components/Forms/ClassForm';

const MultiStep = () => {
  return <div className="multistep-container">Step 1</div>;
};

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
    <div className="formpage-container">
      <HomeNavbar />
      <div className="bg-blue-200 flex flex-col items-center">
        <MultiStep />

        {DisplayMHForm(state)}
        <div className="">{state}</div>

        <div className="Formbutton-container flex gap-4 ">
          <div className="left" onClick={prev}>
            prev
          </div>
          <div className="left" onClick={next}>
            next
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormInputPage;
