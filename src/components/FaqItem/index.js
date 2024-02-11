import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isAnswerVisible: false}

  onClickButton = () => {
    this.setState(prevState => ({isAnswerVisible: !prevState.isAnswerVisible}))
  }

  showAnswer = answerText => {
    const answer = answerText
    return (
      <>
        <hr className="hr-line" />
        <p className="answer-text">{answer}</p>
      </>
    )
  }

  render() {
    const {eachFaq} = this.props
    const {questionText, answerText} = eachFaq
    const {isAnswerVisible} = this.state
    const buttonImgUrl = isAnswerVisible
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAltText = isAnswerVisible ? 'minus' : 'plus'

    return (
      <li className="faq-list-item">
        <div className="faq-item-container">
          <h1 className="question-text">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            <img
              src={buttonImgUrl}
              alt={imgAltText}
              className="plus-minus-image"
            />
          </button>
        </div>
        {isAnswerVisible && this.showAnswer(answerText)}
      </li>
    )
  }
}

export default FaqItem
