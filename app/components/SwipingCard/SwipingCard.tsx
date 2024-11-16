import React, { useEffect, useState } from "react";
import { animated, SpringValue } from "@react-spring/web";
import Icon from "@components/Icon";
import clsx from "clsx";
import Image from "next/image";
import { StaticImageData } from "next/image";

import styles from "./SwipingCard.module.scss";
import { VerifyBlock } from "@components/Verify";
import { toast } from "react-toastify";

interface SwipingCardProps {
  id: number;
  bind: any;
  index: number;
  title: string;
  user: {
    username: string;
    avatarImage: StaticImageData;
  };
  image: StaticImageData;
  onSwipe: () => void;
  trans: (r: number, s: number) => string;
  withShadow?: boolean;
}

const SwipingCard: React.FC<SwipingCardProps> = ({
  id,
  bind,
  index,
  image,
  trans,
  title,
  user,
  withShadow,
  onSwipe,
}) => {
  const [verified, setVerified] = useState(
    () => localStorage.getItem("verified") === "true"
  );

  const handleDoubleClick = () => {
    console.log("double click");
  };

  const handleShareClick = () => console.log("Share clicked");
  const handleCommentsClick = () => console.log("Comments clicked");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input changed:", event.target.value);
  };

  return (
    <animated.div className={styles.deck}>
      <animated.div
        {...bind(index)}
        className={clsx(styles.card, withShadow && styles.withShadow)}
        onDoubleClick={handleDoubleClick}
      >
        <div className={styles.header}>
          <Image
            width={image.width}
            height={image.height}
            draggable={false}
            src={image.src}
            alt="img"
            className={styles.cardImage}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.info}>
            <div className={styles.userInfo}>
              <Image
                width={user.avatarImage.width}
                height={user.avatarImage.height}
                draggable={false}
                src={user.avatarImage.src}
                alt="avatar"
                className={styles.avatar}
              />
              <span className={styles.username}>{user.username}</span>
            </div>
            <span className={styles.date}>11 Mon, 2024</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>
            Tech enthusiasts are debating the hottest tech right now.
          </p>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <div className={styles.share} onClick={handleShareClick}>
              <Icon name="share" />
              <span>10k</span>
            </div>
            <div className={styles.comments} onClick={handleCommentsClick}>
              <Icon name="comments" />
              <span>203</span>
            </div>

            <input
              type="text"
              placeholder="Type your answer..."
              className={styles.input}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {!verified ? (
          <VerifyBlock
            onVerify={() => {
              localStorage.setItem("verified", "true");
              setVerified(true);
              toast.success("Verification successful!");
            }}
          />
        ) : (
          <button className={styles.submit} onClick={onSwipe}>
            Next
          </button>
        )}
      </animated.div>
    </animated.div>
  );
};

export default SwipingCard;
