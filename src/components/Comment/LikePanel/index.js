import styles from "./style.module.scss";

function LikePanel({likes}) {
  return (
    <div className={styles.LikePanelwrapper}>
      <div className={styles.Panel}>
        <div className={styles.square}>+</div>
        <div className={styles.square}>{likes}</div>
        <div className={styles.square}>-</div>
      </div>
    </div>
  );
}

export default LikePanel;
