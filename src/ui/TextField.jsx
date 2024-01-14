import React from "react";

function TextField({
  name,
  label,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
  
        id={name}
        {...register(name, validationSchema)}
        type={type}
        autoComplete="off"
        className="textField__input"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
