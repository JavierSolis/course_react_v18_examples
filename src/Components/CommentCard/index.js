const CommentCard=props=>{
  const {vote,user,comment,createdAt="created default"}=props
  return (
    <>
    {/*<!--div className='comment-card'-->*/}
      
      <div className='vote-comment'>
        + {vote} -
      </div>
      <div className='content-comment'>
          <div className='content-top-commet'>
            <div className='profile-comment'>

              <img src={user.image.png} alt='foto de perfil'
               className='photo-profile-comment' />
               <label className='user-comment'>{user.username}</label>
               <label className='timeago-comment'>{createdAt}</label>
            
            </div>
            <div className='action-comment'>
              reply
            </div>  
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