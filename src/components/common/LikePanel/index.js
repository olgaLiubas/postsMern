import styles from "./style.module.scss";

function LikePanel({likesAmount, setLikesAmount}) {

  return (
    <div className={styles.LikePanelwrapper}>
      <div className={styles.Panel}>
        <div className={styles.square} onClick={() => setLikesAmount(likesAmount + 1)}>+</div>
        <div className={styles.square}>{likesAmount}</div>
        <div className={styles.square} onClick={() => setLikesAmount(likesAmount - 1)}>-</div>
      </div>
    </div>
  );
}

export default LikePanel;
