import React from 'react';
import Header from './Header';
import MenuList from './Menu'
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
        if (window.localStorage.menuObj){
            this.setState({
              menuObj: JSON.parse(window.localStorage.menuObj)
            })
          }
        else{
        this.pullMenu();
        }

        // console.log(this.state.menuObj)
    }

    componentDidUpdate(){
        //setup local Storage
        if(this.state.menuObj.length < 59) {
            this.pullMenu();
        }
        else{
            // this.pullMenu();
            window.localStorage.setItem('menuObj', JSON.stringify(this.state.menuObj))
            console.log(this.state.menuObj)
        }
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
                <MenuList menuObj= {this.state.menuObj}/>
                <Footer/>
            </div>
        )
    }




}

export default Main