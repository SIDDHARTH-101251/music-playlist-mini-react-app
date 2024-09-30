import {Component} from 'react'
import {IoIosSearch} from 'react-icons/io'
import Songs from '../Songs'
import './index.css'

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: props.list,
      searchInput: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelete = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {list, searchInput} = this.state
    const filteredList = list.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className='app-container'>
        <div className='top-card'>
          <h1 className='main-heading'>Ed Sheeran</h1>
          <p className='main-para'>Singer</p>
        </div>
        <div className='songs-container'>
          <div className='input-container'>
            <h1 className='playlist-heading'>Songs Playlist</h1>
            <div className='input-element-container'>
              <input
                type='search'
                className='input-element-style'
                placeholder='Search'
                onChange={this.onChangeSearchInput}
              />
              <div className='search-icon-container'>
                <IoIosSearch className='search-icon' />
              </div>
            </div>
          </div>
          <ul className='songs-container'>
            {filteredList.length !== 0 ? (
              filteredList.map(eachItem => (
                <Songs
                  key={eachItem.id}
                  listItem={eachItem}
                  onDelete={this.onDelete}
                />
              ))
            ) : (
              <p className='no-songs-found-text'>No Songs Found</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Playlist
