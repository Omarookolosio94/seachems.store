import { reSizeField } from "core/helpers/resizeField";
import React, { useRef } from "react";

function TextField({
  boxStyle = "",
  textareaStyle = "",
  value = "",
  name = "",
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
  label = "",
  ref = null,
  rows = 3,
  errors = [],
  enableAction = false,
  placeholder = "",
  isRequired = false,
}: {
  boxStyle?: string;
  textareaStyle?: string;
  value: string;
  name: string;
  disabled?: boolean;
  onChange?: any;
  onBlur?: any;
  label?: string;
  ref?: any;
  rows?: number;
  enableAction?: boolean;
  placeholder?: string;
  isRequired?: boolean;
  errors?: string[];
}) {
  const textAreaRef = useRef(ref);

  reSizeField(textAreaRef.current, value);

  return (
    <div className={`relative ${boxStyle}`}>
      {label && label?.length > 0 && (
        <label htmlFor={name} className="text-gray mb-2 text-[12px]">
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}{" "}
      <textarea
        className={`rounded-[4px] border border-[.5px] bg-shade px-5 py-3 text-sm outline-none disabled:cursor-not-allowed ${textareaStyle}`}
        placeholder={placeholder}
        name={name}
        value={value}
        ref={textAreaRef}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
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

export default TextField;
