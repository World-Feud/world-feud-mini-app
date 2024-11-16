"use client";

import { useState } from "react";
import { useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import styles from "./SwipingDesk.module.scss";
import SwipingCard from "@components/SwipingCard/SwipingCard";
import { mockSparks } from "@mock/sparks/mockSparks";

const to = (i: number, topIndex: number) => ({
  x: 0,
  y: (i - topIndex) * 10,
  scale: 1,
  rot: 0,
  delay: undefined,
});

const from = (_i: number) => ({ x: 0, y: -1000, scale: 1.5, rot: 0 });

const trans = (r: number, s: number) =>
  `rotateX(5deg) rotateY(0deg) rotateZ(${r}deg) scale(${s})`;

const SwipingDesk: React.FC = () => {
  const [gone] = useState(() => new Set());
  const [cards, setCards] = useState(mockSparks);
  const [topIndex, setTopIndex] = useState(cards.length - 1);
  const [swipeMessage, setSwipeMessage] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);

  const [springs, api] = useSprings(cards.length, (i) => ({
    ...to(i, topIndex),
    from: from(i),
  }));

  const triggerSwipe = (
    index: number,
    xDir: number,
    yDir: number,
    message: string
  ) => {
    if (index < 0) return;

    gone.add(index);
    setSwipeMessage(message);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);

    api.start((i) => {
      if (i === index) {
        return {
          x: xDir * (200 + window.innerWidth),
          y: yDir * (200 + window.innerHeight),
          rot: 0,
          scale: 1,
          config: { friction: 50, tension: 200 },
        };
      }
      return {};
    });

    setTopIndex((prev) => prev - 1);
    api.start((i) => {
      if (i < index) {
        return {
          y: (i - (topIndex - 1)) * 10,
          config: { tension: 500, friction: 50 },
        };
      }
      return {};
    });
  };

  const handleLeftSwipe = () => {
    triggerSwipe(topIndex, -1, 0, "Disagreed");
  };

  const handleRightSwipe = () => {
    triggerSwipe(topIndex, 1, 0, "Agreed");
  };

  const handleSkipSwipe = () => {
    triggerSwipe(topIndex, 0, -1, "Skip");
  };

  const handleDownSwipe = () => {
    triggerSwipe(topIndex, 0, 1, "Add to favs");
  };

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity: [vx, vy],
    }) => {
      if (index !== topIndex) return;

      const isHorizontalSwipe = Math.abs(mx) > Math.abs(my);
      const triggerX = vx > 0.2 && isHorizontalSwipe;
      const triggerY = vy > 0.2 && !isHorizontalSwipe;

      if (!active && (triggerX || triggerY)) {
        gone.add(index);

        if (triggerX) {
          setSwipeMessage(xDir > 0 ? "Agreed" : "Disagreed");
        } else if (triggerY) {
          setSwipeMessage(yDir > 0 ? "Add to favorites" : "Skip");
        }

        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
      }

      api.start((i) => {
        if (index !== i) return;

        const isGone = gone.has(index);

        let x = active ? (isHorizontalSwipe ? mx : 0) : 0;
        let y = active ? (!isHorizontalSwipe ? my : 0) : 0;

        if (isGone) {
          if (triggerX) x = (200 + window.innerWidth) * xDir;
          if (triggerY) y = (200 + window.innerHeight) * yDir;
        }

        const rot = isGone ? 0 : mx / 100;
        const scale = active ? 1.1 : 1;
        return {
          x,
          y,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!active && !triggerX && !triggerY) {
        api.start((i) =>
          i === index
            ? {
                ...to(i, topIndex),
                config: { tension: 1200, friction: 40 },
              }
            : {}
        );
      }

      if (!active && gone.size === cards.length) {
        setTimeout(() => {
          gone.clear();
          setSwipeMessage(null);
          setTopIndex(cards.length - 1);
          setCards(mockSparks);

          api.start((i) => ({
            ...to(i, cards.length - 1),
            from: from(i),
          }));
        }, 600);
      } else if (!active && (triggerX || triggerY)) {
        setTopIndex((prev) => prev - 1);

        api.start((i) => {
          if (i < index) {
            return {
              y: (i - (topIndex - 1)) * 10,
            };
          }
        });
      }
    }
  );

  return (
    <div className={styles.deckContainer}>
      {springs.map(({ x, y, rot, scale }, i) =>
        i >= topIndex - 2 ? (
          <SwipingCard
            id={cards[i].id}
            key={i}
            bind={bind}
            index={i}
            x={x}
            y={y}
            rot={rot}
            scale={scale}
            image={cards[i].image}
            title={cards[i].title}
            trans={trans}
            user={cards[i].user}
          />
        ) : null
      )}
    </div>
  );
};

export default SwipingDesk;
