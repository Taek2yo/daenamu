import React from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { removeComment } from "../redux/modules/commentListSlice";


function CommentCard({ comment }) {
  const dispatch = useDispatch();
  
  
  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) {
      alert("삭제되었습니다.");
      dispatch(
        removeComment(comment.id));
  } else {
      alert("취소합니다.");
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
        <button
          onClick = {()=>{onRemove()}}
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
