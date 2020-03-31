import React from 'react';
import Header from './Header';
// import Menu from './Menu'
import Footer from './Footer';
const axios = require('axios').default;

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuObj:  [],
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.pullMenu = this.pullMenu.bind(this)
    }

    componentDidMount(){
        this.pullMenu();
        // console.log(this.state.menuObj)
    }

    componentDidUpdate(){
        //setup local Storage
        if(this.state.menuObj.length >= 59) {
            console.log("Ready to go") 
        }
        else{
            this.pullMenu();
        }
        console.log(this.state.menuObj)
    }

    async pullMenu(){
            let _this = this
            let axiosCall = 
            await axios.get("https://entree-f18.herokuapp.com/v1/menu/12")
            .then((response) => {
                //handle success
                let apiArr = response.data.menu_items
                let menuItems = apiArr.map((item,i)=>{
                    return {name: item.description, price: _this.createPrice()}
                })
                return menuItems
            })
    
            .catch(function(error){
                console.log(error)
                //handle error
                
            })
            
            .finally(function(){
                //always executed
            })
            
            let moreMenu = this.state.menuObj.concat(axiosCall)

            if(this.state.menuObj.length === 0){
                this.setState({menuObj: axiosCall})
            }
            else{
                this.setState({menuObj: moreMenu})
            }
            
        }


    createPrice(){
        return Math.floor(Math.random() * 15) + 15;
    }

    render(){
        return (
            <div>
                <Header/>
                {/* <Menu/> */}
                <Footer/>
            </div>
        )
    }




}

export default Main