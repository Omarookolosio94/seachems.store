import React from "react";

function CheckBoxField({
  name = "",
  value = "",
  checked,
  onChange = () => {},
  label = "",
  sublabel = "",
  className = "",
  type = "checkbox",
}: {
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: any;
  label?: string;
  sublabel: string;
  className?: string;
  type?: string;
}) {
  return (
    <div className={`${className || ""} relative`}>
      <label htmlFor={name} className="text-text-color block text-xs">
        {label}
      </label>
      <div className="flex justify-between gap-2">
        <input
          type={type}
          className="border-3 h-5 w-5 cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="text-black-p capitalize">{sublabel}</span>
      </div>
    </div>
  );
}

export default CheckBoxField;
