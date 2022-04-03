/*import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './Icons/Icon'
class Panel extends React.Component {
	constructor(props) {
		super(props);
	
	}



	render () {
		const { label, content, activeTab, index, activateTab } = this.props;

		const isActive = activeTab === index;
		const innerStyle = {
			height:  `${isActive ? `100%` : `0px`}`
		}

		return (
			<div className='panel'
				role='tabpanel'
				aria-expanded={ isActive }>
				<button className='panel__label'
					role='tab'
					onClick={ activateTab }>
				{ label }	<Icon  name='dropdown' width={16} height={16}/>
				</button>
				<div className='panel__inner'
					style={ innerStyle }
					aria-hidden={ !isActive }>
					<p className='panel__content'>
						{ content }
					</p>
				</div>
			</div>
		);
	}
}

export  default class AccordationRoadMap extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			activeTab: -1
		};
		
		this.activateTab = this.activateTab.bind(this);
	}
	
	activateTab(index) {
		this.setState(prev => ({
			activeTab: prev.activeTab === index ? -1 : index
		}));
	}
	
	render() {
		const { panels } = this.props;
		const { activeTab } = this.state;
		return (
			<div className='accordion' role='tablist'>
				{panels.map((panel, index) =>
					<Panel
						key={ index }
						activeTab={ activeTab }
						index={ index }
						{ ...panel } 
						activateTab={ this.activateTab.bind(null, index) }
					/>
				)}
			</div>
		);
	}
}

 */

import React, { useState, useRef } from "react";
import Icon from "./Icons/Icon";

function AccordationRoadMap(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <span className={`${setRotate}`}>
          <Icon name="dropdown" />
        </span>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="accordion__text">{props.children} </div>
      </div>
    </div>
  );
}

export default AccordationRoadMap;
