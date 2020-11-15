import React, { Component } from 'react'

export default class News extends Component {
  state = {
    newsArr: ['news1', 'news2', 'news3', 'news4']
  }
  render() {
    return (
      <ul>
        {this.state.newsArr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}
