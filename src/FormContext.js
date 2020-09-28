import React from 'react';

const FormContext = React.createContext({
  formData: { errors: {} },
  setFormData: () => {}
});

export default FormContext;
