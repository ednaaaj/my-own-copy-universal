import React from "react";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
  placeholder?: string;
  error?: string;
};

export function SelectField({
  label,
  options,
  placeholder,
  error,
  className,
  defaultValue = "",
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="text-[16px] font-semibold text-black"
      >
        {label}
      </label>
      <div className="relative">
        <div className="flex flex-col">
          <select
            id={props.name}
            defaultValue={defaultValue}
            {...props}
            className={`h-[57px] w-full appearance-none rounded-[16px] border bg-white px-3.5 pr-10 text-[16px] text-black placeholder:text-[#575c56]/60 outline-none transition focus:ring-2 focus:ring-[#068cff]/25 ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-[#575c56]/60 focus:border-[#068cff]"
            } ${className || ""}`}
          >
            {!defaultValue && placeholder ? (
              <option value="" disabled>
                {placeholder}
              </option>
            ) : null}
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
           {error && (
            <span className="mt-1 text-sm text-red-500">{error}</span>
          )}
        </div>
        <span className="pointer-events-none absolute right-3 top-[28px] -translate-y-1/2 flex h-4 w-4 items-center justify-center text-black/60">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
          >
            <path
              d="M1 1l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
