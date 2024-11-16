import { FC } from 'react';
import styles from './Categories.module.scss';

type CategoriesProps = {};

const categories = ['Politics', 'Crypto', 'Sports', 'Pop Culture'];

const Categories: FC<CategoriesProps> = (props) => {
    const {} = props;
    return (
        <div className={styles.root}>
            <div className={styles.categories}>
                {categories.map((category) => (
                    <div className={styles.category} key={category}>
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Categories;
