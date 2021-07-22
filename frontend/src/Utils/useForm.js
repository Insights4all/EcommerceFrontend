import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  // store and set form values
  const [values, setValues] = useState({});
  // store and set form errors
  const [errors, setErrors] = useState({});
  // store and set form submit status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // check that isSubmitting is true inside of the useEffect
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  // handle submit event
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // handle change event for form field
  const handleChange = (event, withEvent = false) => {
    if (withEvent) {
      if (event.persist) {
        event.persist();
      }
      setValues((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    } else {
      setValues((values) => ({
        ...values,
        [event.name]: event.value,
      }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
