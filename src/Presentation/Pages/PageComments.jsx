import DATA from "../Modules/ModuleData";
import FrameWhite from "../Components/FrameWhite";
import CommentCard from "../Components/Comment/CommentCard";
import CommentNew from "../Components/Comment/CommentNew";
import {useEffect, useState} from "react";
import CommentApi from "../../Data/Rest/CommentApi";
import type {DtoComment, DtoCreateCommentResponse, DtoUser} from "../../Data/Dto/CommentGetAllNamespace";
import type {CommentCardProps} from "../Components/Comment/CommentCard/props";

const PageComments = () => {

    const [comments:DtoComment[], setComments] = useState([])

    localStorage.setItem("user_token","12121")
    console.log(localStorage.getItem("user_token"))
    const onDeleteComment=(id)=>{
        console.log("onDeleteComment")
        CommentApi.toDelete(id)
            .then((commentNewResponse:DtoCreateCommentResponse)=> {
                const filtered = comments
                    .filter(entry => entry.id !== id)
                    .map(entry => ({...entry}))
                setComments(comments =>[...filtered])
            })
    }
    const onEditComment=(id,newValue)=>{
        console.log("onEditComment",id,newValue)

        let newCommentItem:DtoComment = {
            comment:newValue,
            create_at:new Date().toISOString()
        }
        CommentApi.update(id,newCommentItem)
            .then((commentNewResponse:DtoCreateCommentResponse)=> {
                const filtered = comments
                    .filter(entry => {
                        if(entry.id == id){
                            entry.comment = newValue
                        }
                        return true
                    })
                    .map(entry => ({...entry}))
                setComments(comments =>[...filtered])
            })
    }
    const onNewComment = (id,newComment) => {
        console.log("new comment>"+id)
        let userCreator:DtoUser = {
            id:0,
            name: "Anonymous",
            avatar: "https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_640.jpg",
            create_at: '2022-10-11T14:46:08.122Z'
        }

        let newCommentItem:DtoComment = {
            id: null,
            user_creator: userCreator,
            comment:newComment,
            votes:[],
            is_reply:false,
            replies:[],
            summary_vote:0,
            create_at:new Date().toISOString()
        }
        CommentApi.create(newCommentItem)
            .then((commentNewResponse:DtoCreateCommentResponse)=> {
                //newCommentItem.id = newCommentStore
                newCommentItem.id = commentNewResponse.name
                setComments(comments =>[newCommentItem,...comments])
            })
    }

    const addNewCommentFromLoad=(newComment:DtoComment)=>{
        setComments(comments =>[newComment,...comments])
    }


    useEffect(() => {
        console.log("use effect")
        CommentApi.getAll()
            .then((actualData) => {
                console.log("actualDat:")
                console.log(actualData)
                if(actualData==null){
                    return
                }

                Object.keys(actualData).map(
                    (key, index)=>{
                        console.log("iterate")
                        console.log(key,index)
                        const commentItem:DtoComment = actualData[key]
                        commentItem.id = key
                        addNewCommentFromLoad(commentItem)
                    }
                )
                //actualData.map(item=>onNewComment(item.id,item.title))
            })
            .catch((err) => {
                console.log("Error:"+err.message);
            });
    }, []);

    return (
        <div>
            <CommentNew onAdd={onNewComment}/>
            { comments.length===0 &&
                <div
                    className="flex-row text-gray-500 m-[15px]">
                    Sin comentarios
                </div>
            }
            { comments.length>0 &&
                comments.map(comment =>{
                    const propsCommentCard:CommentCardProps={
                        id:comment.id,
                        vote:comment.summary_vote,
                        user_name:comment.user_creator.name,
                        user_img:comment.user_creator.avatar,
                        comment:comment.comment,
                        create_at:comment.create_at,
                        onDelete:onDeleteComment,
                        onEdit:onEditComment
                    }
                    return (<FrameWhite key={comment.id}>
                        <CommentCard {...propsCommentCard}/>
                    </FrameWhite>)}
                )
            }
        </div>
    )
}

export default PageComments
