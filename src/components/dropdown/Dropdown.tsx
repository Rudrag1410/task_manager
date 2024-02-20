import clsx from "clsx";
import styles from "./dropdown.module.scss";
import { useState } from "react";
import { getIcons } from "@/assests";
import { IconsType } from "@/assests/types";
import Typography from "@/components/typography";
import { Typography_Variant } from "@/components/typography/types";

const Dropdown = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpenDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className={styles.root} onClick={handleOpenDropdown}>
        <Typography variant={Typography_Variant.Heading_L}>
          Platform Launch
        </Typography>
        <span className={isOpen ? styles.rotateIcon : ""}>
          {getIcons(IconsType.ARROW)}
        </span>
        <div className={clsx(styles.board, isOpen ? styles.open : "")}>
          Hello
        </div>
      </div>
    </>
  );
};
export default Dropdown;
