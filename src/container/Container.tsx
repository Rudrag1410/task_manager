import Board from "@/container/board";
import Empty from "@/container/empty";

import styles from "./container.module.scss";

const Container = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Board />
      <Empty />
    </div>
  );
};
export default Container;
