import React from "react";
import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RadioInput
            key={value}
            name={name}
            id={value}
            value={value}
            label={label}
            register={register}
            watch={watch}
            validationSchema={validationSchema}
            errors={errors}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2 flex-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
