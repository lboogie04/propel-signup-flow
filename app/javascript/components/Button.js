import React from "react"
import PropTypes from "prop-types"
class Button extends React.Component {
  constructor(props) {
   super(props)
   
   this.onClick = this.onClick.bind(this)
  }
 
  onClick(event) {
   console.log("button clicked")
   event.preventDefault()
   this.props.onClick(event)
  }
  render () {
    return (
     <a className={`propel-button ${this.props.disabled}`} href={this.props.href}>{this.props.text}</a>
     )
  }
}

export default Button
