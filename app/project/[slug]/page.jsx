import { groq } from "next-sanity";
import styles from "./project.module.css";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const page = async ({ params: { slug } }) => {
  const query = groq`
    *[_type == "projects" && slug.current == $slug  ]
    `;
  const project = await client.fetch(query, { slug });
  return <div className={styles.main}></div>;
};

export default page;
