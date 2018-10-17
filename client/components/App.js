import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {

handleCLick=()=>{
  $.ajax({
    type : "GET",
    url : "http://localhost:3000/transactions",
    dataType : "json",
    success : function(data){
      console.log(data);
    },
    error : function(error){
      console.log(error)
    }
  })
}

  render() {
    return (
      <div className="App">
       <button type='button' className='btn btn-default' onClick={ this.handleCLick}>Click Me</button>
      </div>
    );
  }
}

export default App;
