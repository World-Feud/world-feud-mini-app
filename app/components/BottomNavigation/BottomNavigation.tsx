"use client";

import styles from "./BottomNavigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Icon, icons } from "@components/Icon/Icon";

type Tab = {
  name: string;
  path: string;
  icon: keyof typeof icons;
};

const tabs: Tab[] = [
  { name: "Surveys", path: "/", icon: "sparks" },
  { name: "Predict", path: "/predict", icon: "pools" },
  { name: "Leaderboard", path: "/leaderboard", icon: "users" },
];

export const BottomNavigation = () => {
  const location = usePathname();

  return (
    <div className={styles.root}>
      <nav className={styles.tabs}>
        {tabs.map((tab) => {
          const isActive = location === tab.path;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={clsx(styles.tab, isActive && styles.isActive)}
            >
              <Icon name={tab.icon} className={styles.icon} />
              <span className={styles.label}>{tab.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
