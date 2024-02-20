import { FC } from "react";

import styles from "./label.module.scss";

interface LabelProps {
  label: string;
  required?: boolean;
}

const Label: FC<LabelProps> = ({ label, required }) => {
  return (
    <div className={styles.labelWrapper}>
      <div className={styles.label}>{label}</div>
      {required && <div className={styles.requiredLabel}>*Required</div>}
    </div>
  );
};

export default Label;
