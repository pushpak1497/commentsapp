import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, toggleIsLiked, deleteComment} = props
  const {id, name, date, comment, isLiked} = details
  const initial = name.split('')[0]
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLiked = () => {
    toggleIsLiked(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li>
      <p>{initial}</p>
      <p>{formatDistanceToNow(date)}</p>
      <p>{name}</p>
      <p>{comment}</p>
      <button type="button" onClick={onClickLiked}>
        <img src={imageUrl} alt="like" />
        Like
      </button>
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}
export default CommentItem
