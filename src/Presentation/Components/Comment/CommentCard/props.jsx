export interface CommentCardProps {
    id:string,
    vote: number,
    user_name: string,
    user_img:string,
    comment: string,
    create_at: string,
    className:string,
    onEdit(id:string,newValue:String): any;
    onDelete(id:string): any;

}