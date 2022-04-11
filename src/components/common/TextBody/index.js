import styles from "./style.module.scss";

function TextBody({text, setText, editMode}) {

  return (
    <div className={styles.PostBody}>
      {!editMode ? <p>{text}</p> : <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>}
    </div>
  );
}

export default TextBody;
