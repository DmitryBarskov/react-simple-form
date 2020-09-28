import React from 'react';

import FormContext from './FormContext';
import Error from './Error';

const Input = ({ name }) => {
  const { formData, setFormData } = React.useContext(FormContext);

  const onChange = (event) => {
    let value = event.target.value;
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

export default Input;
