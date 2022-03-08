import React, { useState } from 'react'
import Icon from './Icons/Icon';


const Accordation = ({heading,children}) => {
   

const [showAccordation,setAccordationStatus] = useState(false);
let classesName ="accordation  ";

if(showAccordation) classesName+=" accordation__open";

return(
  
    <div className={classesName} >
        <div className='accordation__header' onClick={()=> setAccordationStatus(!showAccordation)} role={"list"}>
        <h4 className='accordation__heading '   >{heading}</h4>
       
        <Icon  name='dropdown'/>

        </div>
        <div className="accordation__body "  >
                {children}
               </div>
        </div>
)
}


export default Accordation;