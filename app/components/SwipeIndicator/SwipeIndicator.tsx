import { FC } from "react";
import styles from "./SwipeIndicator.module.scss";
type SwipeIndicatorProps = {};

const SwipeIndicator: FC<SwipeIndicatorProps> = (props) => {
  const {} = props;

  return <div className={styles.root}>Your Voice!</div>;
};

export default SwipeIndicator;
