import React from "react"
import PropTypes from "prop-types"
import CheckBox from "./CheckBox.js"
import Button from "./Button.js"
class Welcome extends React.Component {
  constructor(props) {
   super(props);
   this.setOption = this.setOption.bind(this);
   this.state = {
    option: null
   }
  }
 
  highlighted(option) {
   if (this.state.option == option) {
    return true
   } else {
    return false
   }
  }
 
 
  investorRole = (options) => {
   return options.map((option, i) => {
    let highlighted = this.highlighted(option) ? "highlight" : ''
    return (
     <div 
      className={`option ${highlighted}`}
      key={i}
      onClick={() => this.setOption(option)}
      
     >
       <span>{option}</span>
     </div>
     )
   }) 
  }
  
  setOption(option) {
   console.log(option)
   this.setState({ option: option })
  }


  
  render () {
    const header = `Welcome to Propel(x)`
    const intro = `Thank you for signing up. Your account is currently pending approval for full access to all of our investment opportunities. By law, we're required to ask you a few questions. To expedite your access to deals, please answer a short survey.`
    let disabled = this.state.option !== null ? '' : "disabled"
    let warning = this.state.option !== null ? '' : "You must choose an option before continuing."
    
    return (
     <div className="uk-container">
       <h1 className="align-center">{header}</h1>
       <p className="align-center intro">{intro}</p>
       <p className="start">I am investing as:</p>
       <div className="options uk-flex uk-flex-center">
         {this.investorRole(this.props.options)}
       </div>  
      <CheckBox />
      <span className="uk-align-center align-center warning">{warning}</span>
      <Button disabled={disabled} text="Investment Objectives Survey" href="./personalize" />
     </div>
    );
  }
}

export default Welcome
