import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="faqs-container">
        <div className="faqs-responsive-container">
          <div className="faqs-card">
            <h1 className="faqs-heading">FAQs</h1>
            <ul className="faqs-list-container">
              {faqsList.map(eachFaq => (
                <FaqItem eachFaq={eachFaq} key={eachFaq.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
