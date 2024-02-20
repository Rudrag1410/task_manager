import styles from "./card.module.scss";
interface cardProps {}
const Card = ({}: cardProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div>Card</div>
    </div>
  );
};
export default Card;
