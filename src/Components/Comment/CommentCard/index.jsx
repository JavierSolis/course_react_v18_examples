import CommentVote from "../CommentVote";
import type {Props} from "../CommentVote/props";
import CommentAction from "../CommentAction";

const CommentCard = props => {
    const {index,vote, user, comment, createdAt = "created default"} = props

    const commentVotePro: Props = {
        countVote: vote,
        onClick() {
            console.log("ss")
        }
    }

    return (
        <div className="flex w-full" key={index}>
            {/*<!--div className='comment-card'-->*/}
            <CommentVote className="bg-gray-500" {...commentVotePro}/>

            <div className='pl-5 w-full'>
                <div className='flex w-full'>
                    <div className='profile-comment'>
                        <img src={user.image.png}
                             alt='foto de perfil'
                             className='photo-profile-comment rounded-full mr-1'
                        />
                        <label className='user-comment'>{user.username}</label>
                        <label className='timeago-comment'>{createdAt}</label>
                    </div>
                    <CommentAction/>

                </div>
                <div className='text-comment'>
                    {comment}
                </div>
            </div>

            {/*<!--/div-->*/}
        </div>
    )
}
export default CommentCard