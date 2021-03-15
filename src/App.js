import React, { Component } from 'react'

export default class App extends Component {
  state={person:{
    fullName: "youssef Hamrouni" ,
    bio:"something Else" ,
    imgSrc: <img src="https://img.lemde.fr/2016/06/04/358/0/3500/1750/696/348/60/0/1219ef7_11903-1mh78qk.jpg" alt=""></img>,
    Profession:'developper',
  },
  show : true,
  count : 0,

  }
  handlechange=()=>this.setState({show: !this.state.show , count :0})
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1});
    }, 500);
  }
  render() {
    return (
      <div>
       <button className='btn' onClick={()=>this.handlechange()}> {this.state.show ? "hide":"show"} </button>
       {this.state.show ?(
         <>
         <h1> {this.state.person.fullName}</h1>
         <h2>{this.state.persone.bio}</h2>
         <h2>{this.persone.imgSrc}</h2>
         <h2>{this.state.person.profession}</h2>
         <p> {this.state.count} </p>
       </>): null}
      </div>
    )
  }
}


