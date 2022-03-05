import React from 'react'


const Callouts = ({name,children}) => 
(
  
    <div className={`callouts callouts-warning`}>
            <p>{children}</p>
    </div>
)


export default Callouts;