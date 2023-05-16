import React from "react";

const SingleProject = ({ styles }) => {
  return (
    <div className={styles.project}>
      {/* <Image src={} alt="IMG" /> */}
      <div className={styles.img}></div>
      <div className={styles.projectdetails}>
        <div>
          <h1>website Name</h1>
          <p>website development</p>
        </div>
        <a href="/">&rarr;</a>
      </div>
    </div>
  );
};

export default SingleProject;
