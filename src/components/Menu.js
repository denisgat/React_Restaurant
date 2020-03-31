import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props)
    }

    render(props){
        let menuItems = props.menuObj.map((item,i)=>{
            <li key={i} name={item}>
                <h1>{item.price}</h1>
                <p>{item.name}</p>
            </li>                               
        )}
     return (
         <ul>{menuItems}</ul>
     )
    }
}

export default Menu