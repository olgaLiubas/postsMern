import styles from "./style.module.scss";
import DeleteIcon from '../../../images/delete.png'
import EditIcon from '../../../images/edit.png'
import ReplyIcon from '../../../images/reply.png'
import { deleteComment } from "../../../api";

function CommentHeader({username, created, id, getPostsFromDB}) {

  const creationDate = new Date(created).toISOString().split('T')[0]

  const deleteHandler = () => {
    deleteComment(id)
    getPostsFromDB()
  }
  
  return (
    <div className={styles.PostHeader}>
      <div className={styles.userInfo}>
        <div className={styles.userPhoto}></div>
        <div className={styles.userName}>{username}</div>
        <div className={styles.creationTime}>{creationDate}</div>
      </div>
      <div className={styles.actions}>
        <div className={styles.icon} onClick={deleteHandler}>
          <img src={DeleteIcon} alt="delete"/>
          <p>DELETE</p>
        </div>
        <div className={styles.icon}>
          <img src={EditIcon} alt="edit"/>
          <p>EDIT</p>
        </div>
        <div className={styles.icon}>
          <img src={ReplyIcon} alt="reply"/>
          <p>REPLY</p>
        </div>
      </div>
    </div>
  );
}

export default CommentHeader;
