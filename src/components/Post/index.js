import styles from "./style.module.scss";
import LikePanel from '../common/LikePanel/index.js';
import TextBody from '../common/TextBody';
import Header from '../common/Header';
import { useEffect, useState } from "react";
import { deletePost, editPost } from "../../api/index";


function Post({post, getPostsFromDB, setActiveCommentInput}) {

  const [editMode, setEditMode] = useState(false)
  const [postText, setPostText] = useState(post.text)
  const [likesAmount, setLikesAmount] = useState(post.likes)
  const creationDate = new Date(post.date).toISOString().split('T')[0]

  const deletePostHandler = async() => {
    await deletePost(post._id)
    await getPostsFromDB()
  }

  const editPostHandler = async() => {
    await editPost(post._id, postText, likesAmount)
    await getPostsFromDB()
    setEditMode(false)
  }

  useEffect(()=>{
    editPostHandler()
  },[likesAmount])

  return (
    <div className={styles.Post}>
      <LikePanel
        likesAmount={likesAmount}
        setLikesAmount={setLikesAmount}
        editData={editPostHandler}
      />
      <div className={styles.PostBodyWrapper}>
        <Header
          username={post.name}
          creationDate={creationDate}
          editMode={editMode}
          editData={editPostHandler}
          deleteData={deletePostHandler}
          setEditMode={setEditMode}
          setActiveCommentInput={setActiveCommentInput}
        />
        <TextBody
          editMode={editMode}
          text={postText}
          setText={setPostText}
        />
      </div>
    </div>
  );
}

export default Post;
