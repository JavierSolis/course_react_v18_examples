import DATA from "../Modules/ModuleData";
import FrameWhite from "../Components/FrameWhite";
import CommentCard from "../Components/Comment/CommentCard";
import CommentNew from "../Components/Comment/CommentNew";
import {useState} from "react";

const DEFAULT_USER = {"image": {"png": "/images/avatars/image-amyrobson.png"}, "username": "Default user name"}


const PageComments = () => {
    const [comments, setComments] = useState([])

    const onNewComment = (newComment) => {
        const newCommentItem = {
            "id": 1,
            "content": newComment,
            "createdAt": "1 second ago",
            "score": 0,
            "user": {
                "image": {
                    "png": "https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_640.jpg",
                    "webp": "./images/avatars/image-amyrobson.webp"
                },
                "username": "you"
            },
            "replies": []
        }
        setComments([newCommentItem, ...comments])
    }

    return (
        <div>
            <CommentNew onAdd={onNewComment}/>
            {
                comments.map((comment, index) => {
                    return (<FrameWhite>
                        <CommentCard
                            index={index}
                            vote={comment.score}
                            user={comment.user}
                            comment={comment.content}
                            createdAt={comment.createdAt}
                        />
                    </FrameWhite>)
                })
            }

        </div>
    )
}

export default PageComments