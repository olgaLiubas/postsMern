import styles from "./style.module.scss";
import DeleteIcon from '../../../images/delete.png'
import EditIcon from '../../../images/edit.png'
import ReplyIcon from '../../../images/reply.png'
import SaveIcon from '../../../images/save.png'
import Avatar from '../../../images/avatar.png'



function Header({username, creationDate, editMode, editData, deleteData, setEditMode, setActiveCommentInput}) {
  
  return (
    <div className={styles.PostHeader}>
      <div className={styles.userInfo}>
        <img src={Avatar} alt="avatar" className={styles.userPhoto}/>
        <div className={styles.userName}>{username}</div>
        <div className={styles.creationTime}>{creationDate}</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.icon} onClick={() => deleteData()}>
          <img src={DeleteIcon} alt="delete"/>
          <p>DELETE</p>
        </div>
        <div className={styles.icon} onClick={() => !editMode ? setEditMode(true) : editData()}>
          {
            !editMode 
            ? <><img src={EditIcon} alt="edit"/><p>EDIT</p></>
            : <><img src={SaveIcon} alt="save"/><p>SAVE</p></>
          }
        </div>
        <div className={styles.icon} onClick={() => setActiveCommentInput(true)}>
          <img src={ReplyIcon} alt="reply"/>
          <p>REPLY</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
