import React, { Component } from 'react'

export class Profile extends Component {
    constructor (props){
        super(props);
        this.state={
            fullName:"CHEBBI Nouceiba" ,
            Name:"CHEBBI",
            bio:"Bio" ,
            imgSrc:"https://media.istockphoto.com/photos/bio-written-on-toy-blocks-picture-id1309471003?b=1&k=20&m=1309471003&s=170667a&w=0&h=Ah72yjPX-6tlhc3zKsTfeQCkh8k-Zo1UjIiN4lUiFos=",
            profession:"INGENIEUR"
        }
    }
render(){
    return(
        <div>
            <h2>{this.state.Name} 's PROFILE </h2>
            <img src={this.state.imgSrc} alt="profile"/>
                <div>
                FULLNAME: {this.state.fullName}<br/>
                BIO: {this.state.bio}<br/>
                PROFESSION: {this.state.profession}
                </div>  
        </div>
    )
}
}

