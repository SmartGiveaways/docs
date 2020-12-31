import { useRouter } from "next/router";
import { getData, getMeta } from "../../documents/documents";

import styles from "../../styles/document.module.css";

const Document = ({ data }) => {
  
  return (
    <article className={styles.wrapper}>
      <h1>{data.title}</h1>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
    </article>
    );
}

export const getStaticPaths = async () => {
  const paths = getMeta();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await getData(params.meta);
  return {
    props: {
      data
    }
  }
}

export default Document;