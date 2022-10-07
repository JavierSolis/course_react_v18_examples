import styles from './style.module.scss'
import {Props} from "./props";
import {useState} from "react";

const CommentVote = (model:Props) => {
    const [countVote, setCountVote] = useState(model.countVote)

    return (
        <div className={styles.voteComment}>
            <button onClick={()=> setCountVote(countVote+1)}>
                +
            </button>
            <label>{countVote}</label>
            <button onClick={()=> setCountVote(countVote-1)}>
                -
            </button>
        </div>
    )
}

export default CommentVote