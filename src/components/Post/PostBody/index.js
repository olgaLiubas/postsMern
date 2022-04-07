import styles from "./style.module.scss";

function PostBody({text}) {
  return (
    <div className={styles.PostBody}>
      <p>
        {text}
      </p>
    </div>
  );
}

export default PostBody;
