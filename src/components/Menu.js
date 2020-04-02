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
            return (
            <div>
                <br></br>
                <br></br>
                <img style={{height: "30vh"}} src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg" className="img-fluid w-100 my-5" alt="Responsive image"></img>
                <br></br>
                <br></br>
                <div className="container">
                <h1 id="Specials" key={i} className="text-center">Specials</h1>
                <hr></hr>
                </div>
            </div> 
            )   
        }
        if (i === 6) {
            return (
                <div>
                <img style={{height: "30vh"}} src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg" className="img-fluid w-100 my-5" alt="Responsive image"></img>
                <div className="container">
                <h1 id="Appetizers" key={i} className="text-center">Appetizers</h1>
                <hr></hr>
                </div>
            </div> 
            )
        }
        if (i === 19) {
            return (
                <div>
                <img style={{height: "30vh"}} src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg" className="img-fluid w-100 my-5" alt="Responsive image"></img>
                <div className="container">
                 <h1 id="MainCourse" key={i} className="text-center">Main Course</h1>
                <hr></hr>
                </div>
            </div> 
            )
        }
        if (i === 35) {
            return (
                <div>
                <img style={{height: "30vh"}} src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg" className="img-fluid w-100 my-5" alt="Responsive image"></img>
                <div className="container">
                <h1 id="KidsMenu" key={i} className="text-center">Kids Menu</h1>
                <hr></hr>
                </div>
            </div> 
            )
        }
        if (i === 44) {
            return (
                <div>
                <img style={{height: "30vh"}} src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg" className="img-fluid w-100 my-5" alt="Responsive image"></img>
                <div className="container">
                 <h1 id="Sides" key={i} className="text-center">Sides</h1>
                <hr></hr>
                </div>
            </div> 
            )
        }
        if (i === 51) {
            return (
                <div>
                <img style={{height: "30vh"}} src="https://upserve.com/media/sites/2/bigstock-125615822-1100x600.jpg" className="img-fluid w-100 my-5" alt="Responsive image"></img>
                <div className="container">
                <h1 id="Drinks" key={i} className="text-center">Drinks</h1>
                <hr></hr>
                </div>
            </div> 
            )
        }


        return <Menu key={i} price={item.price} name={item.name}/>
    })
    return (
        <div>
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
