import styles from "./style.module.scss";
import LikePanel from '../common/LikePanel/index.js';
import TextBody from '../common/TextBody';
import Header from '../common/Header';
import { useEffect, useState } from "react";
import { deleteComment, editComment } from "../../api/index";


function Comment({comment, getPostsFromDB, setActiveCommentInput}) {

  const [editMode, setEditMode] = useState(false)
  const [commentText, setCommentText] = useState(comment.text)
  const [likesAmount, setLikesAmount] = useState(comment.likes)
  const creationDate = new Date(comment.date).toISOString().split('T')[0]

  const deleteCommentHandler = async() => {
    await deleteComment(comment._id)
    await getPostsFromDB()
  }

  const editCommentHandler = async() => {
    await editComment(comment._id, commentText, likesAmount)
    await getPostsFromDB()
    setEditMode(false)
  }

  useEffect(()=>{
    editCommentHandler()
  },[likesAmount])

  return (
    <div className={styles.Comment}>
      <LikePanel
        likesAmount={likesAmount}
        setLikesAmount={setLikesAmount}
        editData={editCommentHandler}
      />
      <div className={styles.CommentBodyWrapper}>
        <Header
          username={comment.name}
          creationDate={creationDate}
          editMode={editMode}
          editData={editCommentHandler}
          deleteData={deleteCommentHandler}
          setEditMode={setEditMode}
          setActiveCommentInput={setActiveCommentInput}
        />
        <TextBody
          editMode={editMode}
          text={commentText}
          setText={setCommentText}
        />
      </div>
    </div>
  );
}

export default Comment;

