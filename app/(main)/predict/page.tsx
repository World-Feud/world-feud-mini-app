import styles from "./Predict.module.scss";

export default function PredictView() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Popular Predictions</h1>

      <form className={styles.form}>
        <input type="text" placeholder="Enter your prediction" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
