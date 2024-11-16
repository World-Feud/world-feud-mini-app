import styles from "./SparkDetail.module.scss";

import sparkDetail1 from "@mock/sparks/img/spark_detail1.png";
import avatarImage from "@mock/sparks/img/avatar.png";
import Icon from "@components/Icon";
import ToggleSwitch from "@components/shared/ToggleSwitch/ToggleSwitch";
import Comment from "@components/Comment/Comment";

export default function SparkDetailView() {
  const tags = ["Elections", "Economics", "Politics", "Crypto", "World"];

  return (
    <div className={styles.root}>
      <img alt="spark image" src={sparkDetail1} className={styles.image} />
      <div className={styles.tagsBar}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.userInfo}>
          <div className={styles.userInfoLeft}>
            <img
              draggable={false}
              src={avatarImage}
              alt="avatar"
              className={styles.avatar}
            />
            <span className={styles.username}>green_pineapple420</span>
          </div>
          <Icon name="verified" className={styles.iconVerified} />
        </div>
        <span className={styles.date}>11 Mon, 2024</span>
      </div>

      <h1 className={styles.title}>Should Elon Musk be deported?</h1>
      <p className={styles.description}>
        Description: Biden considers deporting Elon because it is reported by
        the WSJ that he worked on his startup during his graduate studies at
        Stanford in 1995 - which is illegal. Elon is accused of having lied to
        the immigration office.
      </p>

      <div className={styles.commentsSection}>
        <div className={styles.commentsTopBar}>
          <div className={styles.commentsTopBarLeft}>
            <span className={styles.commentsTitle}>Comments</span>
            <span className={styles.delimiter}>|</span>
            <span className={styles.commentsNumber}>203</span>
          </div>
          <div className={styles.commentsTopBarRight}>
            <ToggleSwitch
              options={["Popular", "Recent"]}
              onToggle={(o) => console.log(o)}
            />
          </div>
        </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}
