import React from 'react';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
    this.fetchQuotes = this.fetchQuotes.bind(this)
  }
  
  componentDidMount() {
    return this.fetchQuotes()
  }

  fetchQuotes() {
    return fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then(res =>res.json())
      .then(res => {
        let { quote, author } = res
    
        this.setState({
          quote,
          author
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    const boxStyles = {
       textAlign: "center",
       margin: "20em",
       padding: "2em",
       fontFamily: "cursive",
       fontSize: "1.2em",
    }
  
    const buttonStyles = {
      padding: "1em",
      margin: "1em",
      borderRadius: "5px",
      fontSize: "12px",
    }

    return (
      <div id="quote-box" style={boxStyles}>
        <div id="text">
          <span>{`"${this.state.quote}"`}</span>
        </div>
        <div id="author">
          <span style={{fontWeight: 'bold'}}>Author - </span>
          <span>{this.state.author}</span>
        </div>
        <button 
          id="new-quote" 
          onClick={this.fetchQuotes}
          style={buttonStyles}
         >Fetch quotes</button>
      </div>
    )
  }
}

export default QuoteMachine;
