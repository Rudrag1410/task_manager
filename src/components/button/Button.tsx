import clsx from "clsx";
import styles from "./button.module.scss";

import { ButtonProps, Button_Variant } from "./types";

const Button = ({
  onClick,
  variant = Button_Variant.Primary,
  children,
}: ButtonProps): JSX.Element => {
  const classNames = {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.destructive]: variant === "destructive",
  };
  return (
    <button className={clsx(styles.root, classNames)} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
