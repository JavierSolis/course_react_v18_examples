import HttpCommon from "../HttpCommon";
import {NODE_COMMENT, NODE_COMMENTS} from "../../Constants/ConstantApi";
import type {DtoComment} from "../Dto/CommentGetAllNamespace";

const getAll = () => {
    return HttpCommon(NODE_COMMENTS)
}
const create = (newComment:DtoComment)=>{
    return HttpCommon(NODE_COMMENTS,"POST",newComment)
}
const update = (id:string,newComment:DtoComment)=>{
    return HttpCommon(NODE_COMMENT+id+".json","PATCH",newComment)
}
const toDelete = (id:string)=>{
    return HttpCommon(NODE_COMMENT+id+".json","DELETE")
}


const CommentApi = {
    getAll,
    create,
    update,
    toDelete
}

export default CommentApi