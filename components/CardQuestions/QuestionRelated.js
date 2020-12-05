import React, { useEffect, useState } from "react";
import styles from "./Question.module.css";
import Link from "next/link";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import moment from "moment";

function QuestionRelated(props) {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const [dataQuestion, setDataQuestion] = useState([]);
  const userID = user && user.id;

  const getDataFromAPI = async () => {
    const response = await Client(`recommender/for?userId=${userID}`, "GET")
      .then((res) => {
        return res.data
          .filter((item) => item.itemType === "question")
          .map((item) =>
            Client(`question/${item.itemId}`, "GET")
              .then((res) => res.data)
              .catch((err) => {})
          );
      })
      .catch((err) => err);
    console.log("l24", response);
    const data = await Promise.all(
      response.map(async (item) => {
        return await item.then((result) => result);
      })
    );
    setData(data);
  };

  const getDataQuestion = async () => {
    const dataQuestion = await Client(
      `questions?page=1&limit=5&order=ASC`,
      "GET"
    ).then((res) => {
      return res.data.items;
    });
    setDataQuestion(dataQuestion);
  };

  useEffect(() => {
    getDataFromAPI();
    getDataQuestion();
  }, []);
  return (
    <>
      {data && data.length !== 0 ? (
        <>
          <p className={styles.hotQues}>Recommend For You</p>
          {data &&
            data.map((dat, id) => (
              <div key={id}>
                <div className={styles.hotQuesDetail}>
                  <Link href={`/questions/${dat.id}`}>
                    <a> {dat.title} </a>
                  </Link>
                </div>
              </div>
            ))}
        </>
      ) : (
        <>
          <p className={styles.hotQues}>Oldest Questions</p>
          {dataQuestion &&
            dataQuestion.map((dataQues, idx) => (
              <div key={idx}>
                <div className={styles.hotQuesDetail}>
                  <Link href={`/questions/${dataQues.id}`}>
                    <a> {dataQues.title} </a>
                  </Link>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default QuestionRelated;
