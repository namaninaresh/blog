import React from 'react'


const Callouts = ({name,children}) => 
(
  
    <div className={`callouts callouts-${name}`}>
            <p>{children}</p>
    </div>
)


export default Callouts;