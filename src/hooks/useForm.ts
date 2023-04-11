import React, { RefObject, useCallback, useState } from 'react';

interface IValues {
  [index: string]: string;
}
interface ICheckboxValues {
  [index: string]: boolean;
}
interface IErrors {
  [index: string]: string;
}
// хук управления формой и валидации формы
const useFormWithValidation = (formRef: RefObject<HTMLFormElement>) => {
  const [values, setValues] = useState<IValues>({});
  const [checkboxValues, setCheckboxValues] = useState<ICheckboxValues>({});
  const [errors, setErrors] = useState<IErrors>({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    const { name, value } = target;
    const form = formRef.current;

    setValues({ ...values, [name]: value });

    setErrors({ ...errors, [name]: target.validationMessage });

    if (form !== null) {
      setIsValid(form.checkValidity());
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    const form = formRef.current;

    setCheckboxValues({ ...checkboxValues, [name]: target.checked });

    setErrors({ ...errors, [name]: target.validationMessage });

    if (form !== null) {
      setIsValid(form.checkValidity());
    }
  };

  const resetForm = useCallback(
    (
      newValues = {},
      newCheckBoxValues = {},
      newErrors = {},
      newIsValid = false
    ) => {
      setValues(newValues);
      setCheckboxValues(newCheckBoxValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    checkboxValues,
    handleInputChange,
    handleCheckboxChange,
    errors,
    isValid,
    resetForm,
  };
};

export default useFormWithValidation;
