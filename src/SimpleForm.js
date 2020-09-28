import React from 'react';

import FormContext from './FormContext';

const SimpleForm = ({ children, entity }) => {
  const [formData, setFormData] = React.useState(entity || {});
  const value = { formData, setFormData };

  return (
    <FormContext.Provider value={value}>
      <form>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
