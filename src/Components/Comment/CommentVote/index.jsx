import styles from './style.module.scss'
import {Props} from "./props";
import {useState} from "react";

const CommentVote = (model:Props) => {
    const [countVote, setCountVote] = useState(model.countVote)

    console.log('className 👉️', model.className);

    //<div className={styles.voteComment}>
    return (
        <div className={`
        flex-col
        rounded-[7px]
         h-[90px]
         bg-[rgb(246,245,251)]
         w-[30px]
         px-[7px]
         justify-center
         text-[rgb(197,193,227)]
         ${model.className}
         `}>
            <button
                className="w-[15px] text-[23px]"
                onClick={()=> setCountVote(countVote+1)}>
                +
            </button>
            <label
                className="font-bold text-[15px] text-[rgb(97,90,128)]"
            >{countVote}</label>
            <button
                className="w-[15px] text-[23px]"
                onClick={()=> setCountVote(countVote-1)}>
                -
            </button>
        </div>
    )
}
CommentVote.defaultProps = {
    className: ""
};

export default CommentVote