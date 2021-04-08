import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {cid:234,title:'page1'},
                {cid:453,title:'page2'},
                {cid:654,title:'page3'}
            ]
        }
    }
    render(){
        return (
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link to={'/list/'+item.cid} >{item.title}</Link>
                            </li>
                            )
                    })
                }
            </ul>
            )
    }
}

export default Index