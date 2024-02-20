import { TypographyProps, Typography_Variant } from "./types";
import clsx from "clsx";
import styles from "./typography.module.scss";

const Typography = ({
  children,
  className,
  variant,
}: TypographyProps): JSX.Element => {
  const classNames = {
    [styles.extra_Large_heading]: variant === "heading_extra_Large",
    [styles.large_heading]: variant === "heading_large",
    [styles.medium_heading]: variant === "heading_medium",
    [styles.small_heading]: variant === "heading_small",
    [styles.normal_paragraph]: variant === "paragraph_normal",
  };
  return (
    <span className={clsx(styles.root, classNames, className)}>{children}</span>
  );
};
export default Typography;
