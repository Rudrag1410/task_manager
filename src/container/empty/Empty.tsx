import styles from "./empty.module.scss";

import Typography from "@/components/typography";
import Button from "@/components/button";

import { Typography_Variant } from "@/components/typography/types";
import { getIcons } from "@/assests";
import { IconsType } from "@/assests/types";

const Empty = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Typography
        variant={Typography_Variant.Heading_L}
        className={styles.text}
      >
        This board is empty. Create a new column to get started.
      </Typography>
      <Button>+ Add New Column</Button>
    </div>
  );
};
export default Empty;
