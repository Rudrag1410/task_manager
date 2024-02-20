import { forwardRef } from "react";

import styles from "./input.module.scss";
import Label from "../label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.LegacyRef<HTMLInputElement>;
  label: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  required?: boolean;
}
const Input = (
  {
    label,
    placeholder = "Type here",
    className,
    error,
    required,
    ...rest
  }: InputProps,
  ref: React.LegacyRef<HTMLInputElement>
) => {
  const containerClass = `${styles.container} ${error ? styles.error : ""}`;

  return (
    <div className={className}>
      <Label label={label} required={required} />
      <div className={containerClass}>
        <input
          ref={ref}
          className={styles.input}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default forwardRef(Input);
