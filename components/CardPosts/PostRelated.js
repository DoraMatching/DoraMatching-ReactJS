import React, { useEffect, useState } from "react";
import styles from "./Post.module.scss";
import Link from "next/link";
import { useAuth } from "../../contexts/auth";
import Client from "../../services/Client";
import moment from "moment";

function PostRelated(props) {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const userID = user && user.id;

  const getDataFromAPI = async () => {
    const response = await Client(`recommender/for?userId=${userID}`, "GET")
      .then((res) => {
        return res.data.map((item) =>
          Client(`post/${item.itemId}`, "GET")
            .then((res) => res.data)
            .catch((err) => {})
        );
        //console.log("l15", arr);
      })
      .catch((err) => err);
    console.log("l27", response);
    const data = await Promise.all(
      response.map(async (item) => {
        return await item.then((result) => result);
      })
    );
    console.log("l31", data);
    //return data;
    setData(data);
  };
  // console.log("l34", data);
  useEffect(() => {
    getDataFromAPI();
  }, []);
  console.log("l39", data);
  return (
    <>
      {data && data.map((dat, id) => (
        <div key={id} className={styles.recentPostsContent}>
          <div className={styles.recentPostsImageWrapper}>
            <img src={dat.featuredImage} alt="avt" />
          </div>
          <div className={styles.recentPostsContentWrapper}>
            <div className={styles.postTitle}>
              <h3>
                <Link href="/">
                  <a> {dat.title} </a>
                </Link>
              </h3>
            </div>
            <div className={styles.metaWrapper}>
              <span>{moment(dat.createAt).format("lll")}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostRelated;
