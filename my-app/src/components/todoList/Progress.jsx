import React from 'react'
import '../css/bulma/css/bulma.min.css';
import '../css/fontawesome/css/all.css';


const Progress = ({status}) => {

    if(status === 'done') {
        return (
        <>
          <span className="icon-text has-text-success">
              <span className="icon">
                  <i className="fas fa-check-square"></i>
              </span>
              <span>Success</span>
          </span>
        </>
        )
    } else {
      return (
        <>
          <span className="icon-text has-text-warning">
              <span className="icon">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
              <span>In-progress</span>
          </span>
        </>
        )   
    }

}


export default Progress;