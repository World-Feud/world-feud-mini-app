"use client";

import styles from "./Predict.module.scss";
import Image from "next/image";
import avatar from "@mock/sparks/img/avatar.png";
import { useState } from "react";
import { toast } from "react-toastify";
export default function PredictView() {
  const [commitment, setCommitment] = useState(0);

  const increaseCommitment = () => setCommitment(commitment + 1);
  const decreaseCommitment = () =>
    setCommitment(commitment > 0 ? commitment - 1 : 0);

  const buttonValues = [5, 10, 20, 50];

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Popular Pools</h1>

      <div className={styles.pool}>
        <Image
          src={avatar.src}
          alt="Pool"
          className={styles.poolImage}
          width={100}
          height={100}
        />
        <div className={styles.poolDetails}>
          <h2>What's the hottest tech right now?</h2>
          <p>$ 1,478,230</p>
          <p>2k votes | 203 comments</p>
        </div>
      </div>

      <div className={styles.publicOpinion}>
        <p>Public opinion</p>
        <div className={styles.opinionBar}>
          <div className={styles.yes} style={{ width: "65%" }}>
            NextJS - 65%
          </div>
          <div className={styles.no} style={{ width: "35%" }}>
            Rust - 35%
          </div>
        </div>
      </div>

      <div className={styles.commitment} style={{ marginTop: "26px" }}>
        <div className={styles.commitmentControls}>
          <button onClick={decreaseCommitment}>-</button>
          <span>{commitment}</span>
          <button onClick={increaseCommitment}>+</button>
        </div>
        <div className={styles.commitmentButtons}>
          {buttonValues.map((value, index) => (
            <button
              onClick={() => setCommitment(Number(value))}
              key={index}
              className={styles.commitmentButton}
            >
              {typeof value === "number" ? `${value} WLD` : value}
            </button>
          ))}
        </div>

        <button
          className={styles.predictButton}
          onClick={async () => {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            toast.success(`Prediction successfully sent! ${commitment} WLD`);
          }}
        >
          PREDICT
        </button>
      </div>

      <div
        className={styles.comments}
        style={{ marginTop: "26px", marginBottom: "26px" }}
      >
        <h3>Comments</h3>
        <ul className={styles.commentList}>
          <li className={styles.commentItem}>
            <p className={styles.commentAuthor}>Alex</p>
            <p className={styles.commentText}>
              NextJS is probably the hottest tech right now.
            </p>
          </li>
          <li className={styles.commentItem}>
            <p className={styles.commentAuthor}>John</p>
            <p className={styles.commentText}>
              Rust is probably the hottest tech right now.
            </p>
          </li>
          {/* Add more comments as needed */}
        </ul>
      </div>
    </div>
  );
}
