import React, {Component, Fragment} from 'react'

class List extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <Fragment>
            <h2>List</h2>
            id:{this.state.id}
            </Fragment>
            )
    }
    
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.setState(
            {id:this.props.match.params.id}
        )
    }
}

export default List