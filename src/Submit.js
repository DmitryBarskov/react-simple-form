import React from 'react';

import FormContext from './FormContext';

const disabled = (errors) => {
  for (let errorAttr in errors) {
    if (errors[errorAttr]) {
      return true;
    }
  }
  return false;
};

const Submit = ({ label, onSubmit }) => {
  const { formData } = React.useContext(FormContext);

  const submitData = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <button onClick={submitData} disabled={disabled(formData.errors)}>
      {label || "Submit"}
    </button>
  );
};

export default Submit;
