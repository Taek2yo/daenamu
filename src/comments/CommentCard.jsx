import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeComment,updataComment } from "../redux/modules/commentListSlice";


function CommentCard({ comment }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  // 댓글 제거 함수
  const onRemove = () => {
    if (window.confirm("정말 삭제합니까?")) {
      alert("삭제되었습니다.");
      dispatch(
        removeComment(comment.id));
    } else {
      alert("취소합니다.");
    }
  }

  // 수정하기 버튼을 눌렀을때 true 로 변경

  const handleClickUpdateBtn = () => {
    setIsEdit(true);
  };
  
  // 취소하기 버튼을 눌렀을때 false 로 변경
  const handleClickCancleBtn = () => {
    setIsEdit(false);
  };


  // 댓글 수정 완료
  /* const handleUpdateComment = () =>{
    dispatch(updataComment(comment.id))
  } */
  return (
    <>
      {isEdit ? 
      (<>
      <p>닉네임: {comment.username}</p>
      <input
        type={"text"}
        
      />
      <button onClick={handleClickCancleBtn}>취소하기</button>
      <button>수정완료</button>
      </>) 
      
      
      :(<CommentContainer>
          <Comment>
            <div>닉네임 :{comment.username} </div>
            <div>댓글 : {comment.content}</div>
          </Comment>
          <Btns>
            <button
              onClick={() => { onRemove() }}
            >삭제하기</button>
            <button
              onClick={handleClickUpdateBtn}
            >수정하기</button>
          </Btns>
        </CommentContainer>)}
    </>
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
