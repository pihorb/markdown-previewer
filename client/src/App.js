import React from 'react';
import QuoteMachine from './components/quote-machine'
import MarkdownPreviewer from './components/markdown-previewer'

class App extends React.Component {
    render() {
      return (
        <MarkdownPreviewer></MarkdownPreviewer>
      )
    }
}

export default App;
