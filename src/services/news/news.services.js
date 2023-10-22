import { db } from "../../../firebase.config";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { newsItems } from "../../data/newsData";
export const fetchNewsRequest = async () => {
  const today = new Date();
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(today.getDate() - 2);
  const q = query(
    collection(db, "News"),
    where("createdAt", ">", twoDaysAgo),
    orderBy("createdAt", "desc"),
  );
  const querySnapShot = await getDocs(q);
  const fetchedNews = querySnapShot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return fetchedNews;
};

export const fetchDummyNewsRequest = () => {
  return new Promise((resolve, reject) => {
    const news = newsItems;
    if (!news) {
      reject("Not Found");
    }
    resolve(news);
  });
};
