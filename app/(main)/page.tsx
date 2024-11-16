"use client";

import styles from "./Sparks.module.scss";

import SwipingDesk from "@components/SwipingDesk/SwipingDesk";
import Categories from "@components/Categories/Categories";
import SwipeIndicator from "@components/SwipeIndicator/SwipeIndicator";
import { CardProvider } from "context/CardContext";

export default function SparksView() {
  return (
    <CardProvider>
      <div className={styles.root}>
        <Categories />
        <SwipeIndicator />
        <SwipingDesk />
      </div>
    </CardProvider>
  );
}
