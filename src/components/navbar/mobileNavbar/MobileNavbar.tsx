import styles from "./mobileNavbar.module.scss";

import { getIcons } from "@/assests";
import { IconsType } from "@/assests/types";
import Dropdown from "@/components/dropdown";

const MobileNavbar = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.leftContainer}>
        <span className={styles.icon}>{getIcons(IconsType.MOBILE_LOGO)}</span>
        <Dropdown />
      </div>
      <div>
        <div className={styles.rightContainer}>
          <span className={styles.icon}>{getIcons(IconsType.ADD_BUTTON)}</span>
          <span className={styles.icon}>{getIcons(IconsType.DOTS)}</span>
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
