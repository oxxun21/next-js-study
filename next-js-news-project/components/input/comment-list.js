import classes from "./comment-list.module.css";

function CommentList(props) {
  const { item } = props;
  return (
    <ul className={classes.comments}>
      {item.map((i) => (
        <li key={i._id}>
          <p>{i.text}</p>
          <div>
            By <address>{i.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
