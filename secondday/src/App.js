import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (

    <div className="App">
     <h1>app component</h1>
     <h1>my name is {props.myname}</h1>
     <button onClick={()=>{props.changeName("suresh")}}>Change it</button>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return {
    myname:state.name
  }
}

const mapDispatchTOProps =(dispatch)=>{

  return{
changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name} )}

  }
}
export default connect(mapStateToProps,mapDispatchTOProps)(App);
