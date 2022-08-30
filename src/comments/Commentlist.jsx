import React from "react";
import styled from "styled-components";
import Button from "../elem/Button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux/';
import { __getPosts } from "../redux/modules/post";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../redux/modules/post";
import CommentList from "../comments/CommentList"


function CardDetail() {

    const history = useHistory()
    const dispatch = useDispatch();
    const {error, cards} = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch])


    let {id} = useParams();
    let cardIdex = cards.find(function(x){return x.id == id})
    

    const onRemove = () => {
        if (window.confirm("정말 삭제합니까?")) {
            alert("삭제되었습니다.");
            dispatch(
                deleteCard(id));
            console.log("홈이동");
            history.push("/")
        } else {
            alert("취소합니다.");
        }

    };
    
    return (
        <>
            <DetailBox>
                <h3>name: {cardIdex.name}</h3>
                <h3>title: {cardIdex.title}</h3>
                <h3>desc: {cardIdex.desc}</h3>
                <Button onClick = {()=>{history.push(`/edit/${id}`)}}>수정하기</Button>
                <Button onClick={() => { onRemove() }}>삭제하기</Button>
            </DetailBox>

            <CommentList />
             
            </> 

    )
}

export default CardDetail;

const DetailBox = styled.div`
            border:1px solid gray;
            border-radius: 15px;
            height: 500px;
            margin-top:30px;
            padding: 30px;
            `