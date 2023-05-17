import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import SingleProject from "@/components/SingleProject";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const inter = Inter({ subsets: ["latin"] });

const query = groq`
*[_type == "projects"]{
  ...,
} | order(_createdAt desc)
`;

export default async function Home() {
  const projects = await client.fetch(query);
  return (
    <main className={styles.main}>
      <span>OUR WORK</span>
      <h1>Projects</h1>
      <p>
        Check out all our latest projects in website an webapp development. We
        build a variety of projects from simple business landing pages to
        complex webapps such as management systems and ensure complete client
        satisfaction.
      </p>
      <section className={styles.projectsContainer}>
        {projects.map((project, _i) => (
          <SingleProject styles={styles} project={project} key={project._id} />
        ))}
      </section>
    </main>
  );
}
