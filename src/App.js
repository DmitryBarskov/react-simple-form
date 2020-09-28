import React from 'react';
import SimpleForm from './SimpleForm';
import Input from './Input';
import ValidatedInput from './ValidatedInput';
import Submit from './Submit';

const validateName = (name) => [name.length > 3, "Name is too short."];
const validateAge = (age) => [+age > 20, "You are too young."];

const App = () => {
  // Use existing object for update functionality
  // or empty object for create functionality
  const [user, setUser] = React.useState({ name: "Dmitry", age: 20 });

  // performed on server
  const sendDataToServer = (formData) => {
    const validations = {
      name: validateName,
      age: validateAge,
    };

    let success = true;

    Object.entries(validations).forEach((validation) => {
      let [name, validate] = validation;
      let [isValid, errorMessage] = validate(formData[name]);
      if (!isValid) {
        success = false;
        if (!formData.errors) {
          formData.errors = {};
        }
        formData.errors[name] = errorMessage;
      }
    });

    if (!success) {
      setUser(formData);
    } else {
      alert("Success");
    }
  };

  return (
    <SimpleForm entity={user}>
      {/* validation done on server */}
      <Input name='name' />
      <br></br>
      {/* validation in browser */}
      <ValidatedInput name='age' validate={validateAge} />
      <br></br>
      <Submit onSubmit={sendDataToServer} />
    </SimpleForm>
  );
};

export default App;
