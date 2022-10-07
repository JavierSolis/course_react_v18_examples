import CommentVote from "../CommentVote";
import type {Props} from "../CommentVote/props";
import CommentAction from "../CommentAction";

const CommentCard = props => {
    const {vote, user, comment, createdAt = "created default"} = props

    const commentVotePro:Props={
        countVote:vote,
        onClick() {
            console.log("ss")
        }
    }

    return (
        <>
            {/*<!--div className='comment-card'-->*/}
            <CommentVote {...commentVotePro}/>

            <div className='content-comment'>
                <div className='content-top-commet'>
                    <div className='profile-comment'>

                        <img src={user.image.png} alt='foto de perfil'
                             className='photo-profile-comment'/>
                        <label className='user-comment'>{user.username}</label>
                        <label className='timeago-comment'>{createdAt}</label>
                    </div>
                    <CommentAction />

                </div>
                <div className='text-comment'>
                    {comment}
                </div>
            </div>

            {/*<!--/div-->*/}
        </>
    )
}
export default CommentCard