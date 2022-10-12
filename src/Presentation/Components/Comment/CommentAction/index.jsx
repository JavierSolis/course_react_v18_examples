//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {faReply} from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss"
import {FaReply} from "react-icons/fa";

const CommentAction =({})=>{
    return (
        <a href="src/Presentation/Components/Comment/CommentAction/index#"
           className="flex items-center gap-2 px-3 text-[#514E8D] font-bold">
            <FaReply />
            <span>Reply</span>
        </a>
    );
}

export default CommentAction;