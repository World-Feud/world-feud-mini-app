import React from 'react';
import { animated, SpringValue } from '@react-spring/web';
import styles from './SwipingCard.module.scss';
import Icon from '@components/Icon';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

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
        avatarImage: string;
    };
    image: string;
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
    const navigate = useNavigate();

    const handleDoubleClick = () => {
        console.log('double click');
        navigate(`/sparks/${id}`);
    };

    const handleShareClick = () => console.log('Share clicked');
    const handleCommentsClick = () => console.log('Comments clicked');

    return (
        <animated.div className={styles.deck} style={{ x, y }}>
            <animated.div
                {...bind(index)}
                className={clsx(styles.card, withShadow && styles.withShadow)}
                style={{
                    transform: scale.to((s) => trans(rot.get(), s)),
                    userSelect: 'none',
                }}
                onDoubleClick={handleDoubleClick}
            >
                <div className={styles.header}>
                    <img draggable={false} src={image} alt="img" className={styles.cardImage} />
                </div>
                <div className={styles.body}>
                    <div className={styles.info}>
                        <div className={styles.userInfo}>
                            <img draggable={false} src={user.avatarImage} alt="avatar" className={styles.avatar} />
                            <span className={styles.username}>{user.username}</span>
                        </div>
                        <span className={styles.date}>11 Mon, 2024</span>
                    </div>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>
                        Biden considers deporting Elon because it is reported by the WSJ that he worked on his
                        startup...
                    </p>
                </div>
                <div className={styles.footer}>
                    <button className={clsx(styles.button, styles.expand)} onClick={() => navigate(`/sparks/${id}`)}>
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
