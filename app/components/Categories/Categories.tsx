"use client";

import { FC, useState } from "react";
import styles from "./Categories.module.scss";
import { useCardContext } from "../../context/CardContext";

type CategoriesProps = {};

const categories = ["Politics", "Crypto", "Sports", "Pop Culture"];

const Categories: FC<CategoriesProps> = (props) => {
  const {} = props;
  const { setCurrentCardId } = useCardContext();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className={styles.root}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div
            onClick={() => {
              setCurrentCardId(categories.indexOf(category));
              setActiveCategory(category);
            }}
            className={`${styles.category} ${
              activeCategory === category ? styles.active : ""
            }`}
            key={category}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
