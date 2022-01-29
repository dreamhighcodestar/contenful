import HeadComponent from "../Components/Head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadComponent />
      {/* This is the home page */}
      <h1>Hello World</h1>
    </div>
  );
}
