import React from "react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function TextField({ label, error, className, ...props }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="text-[16px] font-semibold text-black"
      >
        {label}
      </label>
      <div className="flex flex-col">
        <input
          id={props.name}
          {...props}
          className={`h-[57px] rounded-[16px] border bg-white px-3.5 text-[16px] text-black placeholder:text-[#575c56]/60 outline-none transition focus:ring-2 focus:ring-[#068cff]/25 ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[#575c56]/60 focus:border-[#068cff]"
          } ${className || ""}`}
        />
        {error && (
          <span className="mt-1 text-sm text-red-500">{error}</span>
        )}
      </div>
    </div>
  );
}
