import React from "react";
import { animated, SpringValue } from "@react-spring/web";
import Icon from "@components/Icon";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

import styles from "./SwipingCard.module.scss";

interface SwipingCardProps {
  id: number;
  bind: any;
  index: number;
  x: SpringValue<number>;
  y: SpringValue<number>;
  rot: SpringValue<number>;
  scale: SpringValue<number>;
  title: string;
  user: {
    username: string;
    avatarImage: StaticImageData;
  };
  image: StaticImageData;
  trans: (r: number, s: number) => string;
  withShadow?: boolean;
}

const SwipingCard: React.FC<SwipingCardProps> = ({
  id,
  bind,
  index,
  x,
  y,
  rot,
  scale,
  image,
  trans,
  title,
  user,
  withShadow,
}) => {
  const router = useRouter();

  const handleDoubleClick = () => {
    console.log("double click");
    router.push(`/sparks/${id}`);
  };

  const handleShareClick = () => console.log("Share clicked");
  const handleCommentsClick = () => console.log("Comments clicked");

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
            Biden considers deporting Elon because it is reported by the WSJ
            that he worked on his startup...
          </p>
        </div>
        <div className={styles.footer}>
          <button
            className={clsx(styles.button, styles.expand)}
            onClick={() => router.push(`/sparks/${id}`)}
          >
            <Icon name="expand" />
            <span>Show more</span>
          </button>
          <div className={styles.footerLeft}>
            <div className={styles.share} onClick={handleShareClick}>
              <Icon name="share" />
              <span>10k</span>
            </div>
            <div className={styles.comments} onClick={handleCommentsClick}>
              <Icon name="comments" />
              <span>203</span>
            </div>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default SwipingCard;
