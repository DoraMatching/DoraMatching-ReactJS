import React from 'react';
import { useAuth } from '../../../contexts/auth';
import Classe from '../CardClasses/Class';
import styles from './CardTopicsPage.module.scss';
import CreateClass from './CreateClass';
import CreateTopic from './CreateTopic';
import SearchClass from '../../SearchModule/SearchClass';

export default function CardClassesLeft({ classes }) {
    const { user } = useAuth();

    return (
        <div className={styles.cardTopicsLeft}>
            {/* <h3>Classes Management</h3>
      <div className={styles.cardTopicsLeftJoined}>
        <CardTopicsJoined />
      </div> */}
            {user && user.roles.indexOf('TRAINER') !== -1 ? (
                <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                    <CreateTopic />
                    <SearchClass />
                    <CreateClass />
                </div>
            ) : (
                ''
            )}
            <h3 style={{ margin: '20px 0px' }}>All Classes</h3>
            <div className={styles.cardAllClass}>
                {classes.map((classe, id) => {
                    return <Classe classe={classe} key={id} />;
                })}
            </div>
        </div>
    );
}
