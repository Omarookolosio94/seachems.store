import React from "react";

function FileUpload({
  onChange = () => {},
  onSubmit = () => {},
  className = "",
  label = "",
  name = "",
  btnLabel = "",
  isRequired = false,
}: {
  onChange?: any;
  onSubmit?: any;
  className?: string;
  label?: string;
  name: string;
  btnLabel?: string;
  isRequired?: boolean;
}) {
  const openFile = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById(name)!.click();
  };
  return (
    <div className={`${className} mb-5`}>
      <label htmlFor={name} className="text-[14px] text-brandgray">
        {label}
        {isRequired && <span className="text-red-500">&#42; </span>}
      </label>
      <form onSubmit={onSubmit}>
        <div className="relative py-3">
          <input
            id={name}
            name={name}
            type="file"
            onChange={onChange}
            className="text-exs file:text-exs block w-full file:mr-20 file:mr-4 file:rounded-sm file:border-0 file:border-0 file:bg-transparent file:px-3 file:py-0.5 hover:file:bg-blue-100"
          />

          <button
            type="button"
            className="bg-light-primary border-primary text-text-color custom-btn absolute bottom-2 rounded-sm border px-3 py-1"
            onClick={openFile}
          >
            <div className="flex items-center justify-center gap-2">
              <img src="" alt="" className="text-primary text-lg" />{" "}
              <span className="text-exs">{btnLabel || "Upload Document"}</span>
            </div>
          </button>
        </div> 
        <div className="text-right">
          <button
            type="submit"
            className="bg-primary border-primary custom-btn rounded-sm border px-3 py-1 text-white hover:bg-opacity-70"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FileUpload;
