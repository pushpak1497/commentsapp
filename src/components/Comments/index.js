import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []
class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: v4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
    }
    console.log(newComment)
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredData = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredData,
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {commentsList, name, comment} = this.state
    console.log(name)
    console.log(comment)
    console.log(commentsList)
    return (
      <div>
        <div className="details-container">
          <div>
            <h1>Comments</h1>
            <p>say something about 4.o Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                onChange={this.onChangeName}
                value={name}
                placeholder="Your Name"
              />
              <textarea
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                value={comment}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div>
          <p>{commentsList.length} comments </p>
          <ul className="list-container">
            {commentsList.map(each => (
              <CommentItem
                key={each.id}
                details={each}
                toggleIsLiked={this.toggleIsLiked}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
