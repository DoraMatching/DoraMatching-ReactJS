import Link from 'next/link';
import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styles from './Topic.module.scss';

function Topic({ topic }) {
    return (
        <div className={styles.topicCard}>
            <div className={styles.topicMeta}>
                <div className={styles.topicPhoto}>
                    <img src={topic.featuredImage} alt="topicPhoto" width="100%" height="100%" />
                </div>
            </div>
            <div className={styles.topicDescription}>
                <h1>{topic.name}</h1>
                <h2>{topic.author.user.name}</h2>
                <p>{topic.description}</p>
                <div className={styles.courseMeta}>
                    <span className={styles.courseStudents} title="students enrolled">
                        <Icon name="th large" /> {topic.classes.length}
                    </span>
                    <Link href={`/topics/${topic.id}/classes`}>
                        <Button className={styles.topicReadmore}>
                            <a>See all</a>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Topic;
