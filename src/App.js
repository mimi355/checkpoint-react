import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {   
render(){ return (
  <div className="App"> 
   
   <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> </label>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password
    <input type="password" className="form-control" id="exampleInputPassword1"/> </label>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>     
);     
   }     
                                
}
export default App;

