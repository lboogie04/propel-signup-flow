import React, { Component } from "react"
import PropTypes from "prop-types"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Button from "./Button.js"

class Personalize extends React.Component {
 constructor(props, context) {
  super(props, context)
  this.state = {
   techs: [],
   sectors: [],
   volume: 0
  }
 }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
 renderSectors = (sectors) => {
  return sectors.map((sector, i) => {
   let highlighted = this.sectorHighlighted(sector) ? "highlight" : ''
   return (
     <div 
      className={`sector ${highlighted}`}
      key={i}
      onClick={() => this.setSectorOption(sector)}
      >
       <span>{sector}</span>
     </div>
     )
  })
 }
  
 renderTechs = (techs) => {
  return techs.map((tech, i) => {
    let highlighted = this.techHighlighted(tech) ? "highlight" : ''
    return (
     <div 
      className={`tech ${highlighted}`}
      key={i}
      onClick={() => this.setTechOption(tech)}
      >
       <span>{tech}</span>
     </div>
     )
   }) 
 }

 techHighlighted(option) {
   let techArray = this.state.techs
   if (techArray.includes(option)) {
    return true
   } else {
    return false
   }
  }
 
 sectorHighlighted(option) {
   let sectorArray = this.state.sectors
   if (sectorArray.includes(option)) {
    return true
   } else {
    return false
   }
  }
 
 setTechOption(option) {
   let techArray = this.state.techs
   if (techArray.includes(option)) {
    let index = techArray.indexOf(option)
    if (index > -1) {
     techArray.splice(index, 1)
    }
   } else {
    techArray.push(option)
   }
   this.setState({ techs: techArray })
  }

  setSectorOption(option) {
   let sectorArray = this.state.sectors
   if (sectorArray.includes(option)) {
    let index = sectorArray.indexOf(option)
    if (index > -1) {
     sectorArray.splice(index, 1)
    }
   } else {
    sectorArray.push(option)
   }
   this.setState({ sectors: sectorArray })
  }
 
 render () {
    const header = `We have a few questions to personalize your experience.`
    let { volume, techs, sectors } = this.state
    const horizontalLabels = {
      0: '0',
      5: '5',
      10: '10',
      15: 'Over 10'
    }
    let disabled = (techs.length === 0 || sectors.length === 0) ? "disabled" : ''

    return (
     <div className="col-10 offset-md-1">
       <h1 className="">{header}</h1>
       <p className="question">What technologies are you interested in?</p>
       <div className="options uk-flex uk-flex-center">
         {this.renderTechs(this.props.technologies)}
       </div>
       <p className="question">What sectors are you interested in?</p>
       <div className="sectors options">
         {this.renderSectors(this.props.sectors)}
       </div>
       <p className="question">How many angel investments have you made?</p>
       <div className='slider-horizontal'>
       <Slider
        min={0}
        max={15}
        step={5.0}
        labels={horizontalLabels}
        value={volume}
        onChange={this.handleOnChange}
      /> </div>
      <Button disabled={disabled} text="Continue" href="./" />
     </div>  
    );
  }
}

export default Personalize
