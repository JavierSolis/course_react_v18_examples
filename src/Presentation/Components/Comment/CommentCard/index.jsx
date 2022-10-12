import CommentVote from "../CommentVote";
import type {Props} from "../CommentVote/props";
import type {CommentCardProps} from "./props";
import TimeAgo from "react-timeago";
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import type {L10nsStrings} from "react-timeago/lib/formatters/buildFormatter";

const CommentCard = (props:CommentCardProps) => {

    const strings: L10nsStrings = {
        prefixAgo: 'hace',
        prefixFromNow: 'dentro de',
        suffixAgo: '',
        suffixFromNow: '',
        seconds: 'menos de un min',
        minute: 'un min',
        minutes: '%d min',
        hour: 'una hora',
        hours: '%d horas',
        day: 'un día',
        days: '%d días',
        month: 'un mes',
        months: '%d meses',
        year: 'un año',
        years: '%d años',
    }

    const formatter = buildFormatter(strings)


    const commentVotePro: Props = {
        countVote: props.vote,
        onClick() {
            console.log("ss")
        }
    }

    return (
        <div className="flex flex w-full">
            {/*<!--div className='comment-card'-->*/}
            <CommentVote className="bg-gray-500 hidden" {...commentVotePro}/>

            <div className='w-full'>
                <div className='flex w-full'>
                    <div className='profile-comment'>
                        <img src={props.user_img}
                             alt='foto de perfil'
                             className='photo-profile-comment rounded-full mr-1'
                        />
                        <label className='user-comment'>{props.user_name}</label>
                        <label className='timeago-comment'>
                            <TimeAgo date={props.create_at} formatter={formatter} />
                        </label>
                    </div>
                    {/*<CommentAction/>*/}

                </div>
                <div className='text-comment'>
                    {props.comment}
                </div>
                <div className="flex gap-2 text-comment">
                    <button className="px-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
                    <button className="px-2" onClick={()=>props.onEdit(props.id,"Nuevo valor")}>Edit</button>
                </div>
            </div>

            {/*<!--/div-->*/}
        </div>
    )
}
export default CommentCard