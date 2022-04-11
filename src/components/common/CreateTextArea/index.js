import { useState } from "react";
import { createPost, createComment } from "../../../api";
import styles from "./style.module.scss";
import Avatar from '../../../images/avatar.png'

function CreateTextArea({getPostsFromDB, postId, setActiveCommentInput}) {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleClick = async () => {
    if(text){
      if(!postId){
        await createPost({
          name: 'Olya',
          text: text
        })
      }else{
        await createComment({
          name: 'Olya',
          text: text,
          postId: postId
        })
        setActiveCommentInput(false)
      }
      await getPostsFromDB()
      setText('')
    }
  }

  return (
    <div className={styles.addPost}>
      <img src={Avatar} alt="avatar" className={styles.userPhoto}/>
      <textarea 
        onChange={handleChange} 
        value={text}
      />
      <button 
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  );
}

export default CreateTextArea;
