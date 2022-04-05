import styles from "./style.module.scss";

function AddUpdatePostInput() {
  return (
    <div className={styles.addPost}>
      <div className={styles.userPhoto}></div>
      <textarea></textarea>
      <button>SEND</button>
    </div>
  );
}

export default AddUpdatePostInput;
