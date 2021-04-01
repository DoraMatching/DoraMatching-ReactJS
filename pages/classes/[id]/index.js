import React, {useState} from 'react';
import LessonPage from '../../../containers/LessonPage';
import Client from '../../../services/Client';
import styles from '../../../styles/Home.module.css';

function lessons({ classe, lessons, id }) {
    const [_classe, setClasse] = useState({...classe});
    const [_lessons, setLessons] = useState([...lessons]);

    const fetchData = async () => {
        const [classe, lessons] = await Promise.all([Client(`classe/${id}`), Client(`classe/${id}/lessons`)]);
        setClasse(classe);
        setLessons(lessons);
    }

    return (
        <div className={styles.container}>
            <LessonPage classe={_classe} lessons={_lessons} fetchData={fetchData}/>
        </div>
    );
}

lessons.getInitialProps = async ({ query: { id } }) => {
    const [classe, lessons] = await Promise.all([Client(`classe/${id}`), Client(`classe/${id}/lessons`)]);
    return {
        classe: classe.data,
        lessons: lessons.data.items,
        id
    };
};

export default lessons;
