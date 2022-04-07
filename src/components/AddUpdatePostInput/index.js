import { useState } from "react";
import { createPost } from "../../api";
import styles from "./style.module.scss";

function AddUpdatePostInput({getPostsFromDB}) {
  const [postText, setPostText] = useState('')

  const handleChange = (e) => {
    setPostText(e.target.value)
  }

  const handleClick = async () => {
    if(postText){
      await createPost({
        name: 'Olya',
        text: postText
      })
      await getPostsFromDB()
      setPostText('')
    }
  }

  return (
    <div className={styles.addPost}>
      <div 
        className={styles.userPhoto}
      />
      <textarea 
        onChange={handleChange} 
        value={postText}
      />
      <button 
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  );
}

export default AddUpdatePostInput;
