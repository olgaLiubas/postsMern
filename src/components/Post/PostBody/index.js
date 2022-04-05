import styles from "./style.module.scss";

function PostBody() {
  return (
    <div className={styles.PostBody}>
      <p>
        Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics. 
        As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed 
        specifically to work well with other web standards including CSS, DOM, JavaScript, and SMIL. SVG is, essentially, to graphics 
        what HTML is to text.
        {/* Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics. 
        As such, it's a text-based, open Web standard for describing images that can be rendered cleanly at any size and are designed 
        specifically to work well with other web standards including CSS, DOM, JavaScript, and SMIL. SVG is, essentially, to graphics 
        what HTML is to text. */}
      </p>
    </div>
  );
}

export default PostBody;
