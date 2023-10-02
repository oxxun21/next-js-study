import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const { eventId } = props;

  const notificationCtx = useContext(NotificationContext);

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showComments) {
      setLoading(true);
      fetch("/api/comments/" + eventId)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "댓글 전송중",
      message: "댓글 저장중",
      status: "pending",
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          throw new Error(data.message || " 문제가 발생했습니다");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "성공",
          message: "댓글 작성이 완료 되었습니다",
          status: "success",
        });
      })
      .catch((e) => {
        notificationCtx.showNotification({
          title: "에러",
          message: e.message || "댓글 작성에 문제가 생겼습니다",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !loading && <CommentList item={comments} />}
      {showComments && loading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
