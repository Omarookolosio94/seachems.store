import React from "react";

function SelectField({
  boxStyle = "",
  selectStyle = "",
  value = "",
  name = "",
  options = [],
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  label = "",
  errors = [],
  defaultName = "",
  defaultValue = "",
  isRequired = false,
}: {
  boxStyle?: string;
  selectStyle?: string;
  value?: any;
  name?: string;
  options?: any;
  disabled?: boolean;
  onChange?: any;
  onBlur?: any;
  label?: string;
  errors?: string[];
  defaultName?: string;
  defaultValue?: string;
  isRequired?: boolean;
}) {
  return (
    <div className={`${boxStyle}`}>
      {label && label?.length > 0 && (
        <label htmlFor={name} className="text-[12px] mb-1 text-gray">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        className={`flex h-12 w-full items-center justify-center rounded-[4px] border border-[.5px] border-black-shade bg-shade px-4 py-3 text-sm outline-none disabled:cursor-not-allowed ${selectStyle}`}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        <option key={defaultValue} value={defaultValue}>
          {defaultName}
        </option>
        {options &&
          options?.length > 0 &&
          options?.map((option: any) => (
            <option className="py-3" key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {errors?.length > 0 &&
        errors?.slice(0, 1)?.map((error: any, index: number) => (
          <span
            key={index}
            className="duration-2000 mt-1 block  text-[12px] text-red-500 transition-all ease-in-out"
          >
            {error}
          </span>
        ))}
    </div>
  );
}

export default SelectField;
