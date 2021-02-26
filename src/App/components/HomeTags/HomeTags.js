import * as React from "react";
import {observer} from "mobx-react-lite";

import HomeTagsCard from "@components/HomeTagsCard";

import styles from "./HomeTags.module.scss";

const HomeTags = ({ data }) => {
    return <div className={styles['content']}>
        <div className={styles['content__header']}>
            Top 5 tags
        </div>
        <div className={styles['content__inner']}>
            {data.tags?.tag.map((el, key) => {
                return <HomeTagsCard
                    key={key}
                    name={el.name}
                    reach={el.reach}
                    tags={el.taggings}
                />
            })}
        </div>
    </div>
}

export default observer(HomeTags);
