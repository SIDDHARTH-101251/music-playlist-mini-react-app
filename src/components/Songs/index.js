import {MdDelete} from 'react-icons/md'
import './index.css'

const Songs = props => {
  const {listItem, onDelete} = props
  const {imageUrl, name, genre, duration, id} = listItem
  const onClickDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="outer-container">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="image-style" />
      </div>
      <div className="song-details-container">
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <div className="duration-container">
          <p className="name">{duration}</p>
          <button
            type="button"
            className="delete-button"
            onClick={onClickDeleteButton}
            data-testid="delete"
          >
            <MdDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Songs
