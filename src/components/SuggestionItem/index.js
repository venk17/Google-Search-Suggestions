import './index.css'

const SuggestionItem = ({suggestion, onClickSuggestion}) => {
  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion.suggestion}</p>
      <button
        className="arrow-button"
        onClick={() => onClickSuggestion(suggestion)}
      >
        <img
          className="arrow-icon"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
