import React from "react"
import PropTypes from "prop-types"
class CheckBox extends React.Component {
  render () {
    const policy = `By joining, you are agreeing to Propel(x)'s Terms of Use and Privacy Policy`
    return <div className="investor"><label><input className="uk-radio" type="radio" name="radio2" /> I am an accredited investor<i className="fas fa-question-circle"></i></label>
     <span className="policy">{policy}</span>
     </div>;
  }
}

export default CheckBox
