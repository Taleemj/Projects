import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import styles from "./project.module.css";

const SingleProject = ({ project }) => {
  return (
    <div className={styles.project}>
      <div className={styles.img}>
        <Image
          src={urlForImage(project.mainImage).url()}
          alt="Project image"
          width="350"
          height="40"
        />
      </div>
      <div className={styles.projectdetails}>
        <div>
          <h1>{project.title}</h1>
          <p>{project.subTitle}</p>
        </div>
        <a href={`${project.body}`}>&rarr;</a>
      </div>
    </div>
  );
};

export default SingleProject;
