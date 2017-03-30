import React from 'react';

// alternatively could not pass props and use this.props 
const List = (props) => {
    return (
     <ul>
          {props.nameOfprops.map((item, index) => <li key={index}>{item}</li>)}
     </ul>   
     )
}

export default List;