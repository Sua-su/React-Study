import React from "react";

export class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }
    
    handleClick() {
        this.setState({ liked: !this.state.liked});

    }

    render(){
        //return <button onClick={() => this.handleClick}>{this.text}</button>
        const text = this.state.liked?"you liked this." : "Like" ;
        return <button onClick={this.handleClick()}>{text}</button>;


        
    }

}
