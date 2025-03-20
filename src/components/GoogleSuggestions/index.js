import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const GoogleSuggestions = ({suggestionsList}) => {
  const [searchInput, setSearchInput] = useState('')

  const onSearchChange = event => {
    setSearchInput(event.target.value)
  }

  const filteredSuggestions = suggestionsList.filter(suggestion =>
    suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const onClickSuggestion = suggestion => {
    setSearchInput(suggestion.suggestion)
  }

  return (
    <div className="google-search-suggestions-container">
      {/* Google Logo */}
      <div className="google-logo-container">
        <img
          className="google-logo"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
      </div>

      {/* Search Input */}
      <div className="search-container">
        <div className="search-icon-container">
          <img
            className="search-icon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          />
        </div>
        <input
          className="search-input"
          type="search" // Ensures this is a search input
          role="searchbox" // Explicitly mark as a search box
          placeholder="Search Google"
          value={searchInput}
          onChange={onSearchChange}
        />
      </div>

      {/* Suggestions List */}
      <ul className="suggestions-list">
        {filteredSuggestions.length === 0 ? (
          <p className="no-suggestions">No Suggestions Found</p>
        ) : (
          filteredSuggestions.map(suggestion => (
            <SuggestionItem
              key={suggestion.id} // Ensure unique key for each item
              suggestion={suggestion}
              onClickSuggestion={onClickSuggestion}
            />
          ))
        )}
      </ul>
    </div>
  )
}

export default GoogleSuggestions
