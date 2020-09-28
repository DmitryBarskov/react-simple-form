import React from 'react';

import FormContext from './FormContext';
import Error from './Error';

const ValidatedInput = ({ name, validate }) => {
  const { formData, setFormData } = React.useContext(FormContext);

  const onChange = (event) => {
    let value = event.target.value;

    let [isValid, errorMessage] = validate(value);

    if (isValid) {
      delete formData.errors[name];
    } else {
      if (!formData.errors) {
        formData.errors = {};
      }
      formData.errors[name] = errorMessage;
    }

    setFormData({ ...formData, [name]: value });
  };

  return (
    <label>
      {name}
      <input name={name} value={formData[name] || ""} onChange={onChange} />
      <Error message={(formData.errors || {})[name]} />
    </label>
  );
};

export default ValidatedInput;
