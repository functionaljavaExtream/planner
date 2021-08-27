import React from 'react'
import '../css/bulma/css/bulma.min.css';
import '../css/fontawesome/css/all.css';


const Check = ({changeTodoStatus, status}) => {

  
    // change item's status
    const toggleItem = (e) => {
      const id = e.target.parentElement.dataset.id
      changeTodoStatus(id)
    }

    if(status === 'done') {
        return (
        <>
          <button className='button is-warning' onClick={toggleItem}>Cancel</button>
        </>
        )
    } else {
      return (
        <>
          <button className='button is-primary' onClick={toggleItem}>Done</button>
        </>
        )   
    }

}


export default Check;