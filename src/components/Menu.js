import React from 'react';

const Menu = (props) => {
    return (
        <p className="text-center">{props.name} ~ ${props.price}</p>
    )
};


const MenuList = (props) => {
    let menuObj = props.menuObj
    let menu = menuObj.map((item, i) => {
        if (i === 0) {
            return (<h1 key={i} className="text-center">Specials</h1>)        
        }
        if (i === 6) {
            return (<h1 key={i} className="text-center">Appetizers</h1>)
        }
        if (i === 19) {
            return (<h1 key={i} className="text-center">Main Course</h1>)
        }
        if (i === 35) {
            return (<h1 key={i} className="text-center">Kids Menu</h1>)
        }
        if (i === 44) {
            return (<h1 key={i} className="text-center">Sides</h1>)
        }
        if (i === 51) {
            return (<h1 key={i} className="text-center">Drinks</h1>)
        }


        return <Menu key={i} price={item.price} name={item.name}/>
    })
    return (
        <div className="container">
            {menu}
        </div>
    )
};



export default MenuList




//     render(props){
//         const menu = props.mainObj.map((item,i)=>{
//             if(i <= 19)
//             <
//         }
//      return (
//          <ul>
//             <h1>Appetizers</h1>
//              <p></p>
//          </ul>
//      )
//     }
// }
