import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __deleteComment,__editComment } from "../redux/modules/commentListSlice";


function CommentCard({ comment }) {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [updatedComment, setUpdatedComment] = useState("");
  
  const handleDelete =()=>{
    const reulst = window.confirm("삭제하시겠습니까?");
    if (reulst) {
      dispatch(__deleteComment(comment.id))
    } else {
      return;
    }
  }

 /*  const handleEdit = () =>{
    dispatch(
      __editComment({
        id: comment.id,
        content: updatedComment,
        username: comment.username,
        cardId : id,
      })
    )
  } */

  return (
    <CommentContainer>
      <Comment>
        <div>닉네임 :{comment.username} </div>
        <div>댓글 : {comment.content}</div>
      </Comment>
      <Btns>
        <button onClick={handleDelete}
        >삭제하기</button>
        
        <button>수정하기</button>
      </Btns>
    </CommentContainer>
  )
}


export default CommentCard;

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    border: 1px solid grey;
    margin: 10px;
`

const Comment = styled.div`
    display: flex;
`

const Btns = styled.div`
    
`
