"use client";

import styles from "./Predict.module.scss";
import Image from "next/image";
import avatar from "@mock/sparks/img/avatar.png";
import { useState } from "react";
import { toast } from "react-toastify";
import Comment from "@components/Comment/Comment";

export default function PredictView() {
  const [commitment, setCommitment] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
          <h2>What is the hottest tech right now?</h2>
          <p>$ 478,230</p>
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
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setIsLoading(false);
            toast.success(`Prediction successfully sent! ${commitment} WLD`);
          }}
          disabled={isLoading || commitment === 0}
        >
          {isLoading ? "Submitting..." : "Predict"}
        </button>
      </div>

      <div
        className={styles.comments}
        style={{ marginTop: "26px", marginBottom: "26px" }}
      >
        <h3 style={{ marginBottom: "16px" }}>Comments</h3>

        {/* Add more comments as needed */}
        <Comment />
      </div>
    </div>
  );
}
