import React, { FC } from "react";
import styles from "./Comment.module.scss";
import avatarImage from "@mock/poll/img/poll2.png";
import Icon from "@components/Icon";

type CommentProps = {};

const Comment: FC<CommentProps> = (props) => {
  const {} = props;

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <img
            draggable={false}
            src={avatarImage.src}
            alt="avatar"
            className={styles.avatar}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>lord_moin007</span>
            <span className={styles.datetime}>2 hours ago</span>
          </div>
        </div>
        <div className={styles.topRight}>
          <Icon name="menu" />
        </div>
      </div>
      <div className={styles.main}>
        <p className={styles.commentText}>
          NextJS is probably the hottest tech right now. It gives a lot of
          benefits and I think it's a good choice for a project.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
          <div className={styles.like}>
            <Icon name="like" />
            <span className={styles.likeCount}>12</span>
          </div>
          <div className={styles.dislike}>
            <Icon name="dislike" />
            <span className={styles.dislikeCount}>5</span>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.replies}>
            <span className={styles.replyCount}>14 Replies</span>
            <Icon name="arrowUp" />
          </div>
          <span className={styles.delimeter}>|</span>
          <button className={styles.replyButton}>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
