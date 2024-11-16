import React, { FC } from 'react';
import styles from './Comment.module.scss';
import avatarImage from '@mock/sparks/img/avatar.png';
import Icon from '@components/Icon';

type CommentProps = {};

const Comment: FC<CommentProps> = (props) => {
    const {} = props;

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                    <img draggable={false} src={avatarImage} alt="avatar" className={styles.avatar} />
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
                I think it depends on related comments will goes here, lorem ipsumd dolor sit ament and most of my
                friends are very naughty so I don’t usually to see them and more content you can place here as you want.
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
