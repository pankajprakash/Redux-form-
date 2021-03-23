
const istate={fname:'',lname:'', email:'', password:''}
const Reducer=(state=istate,action) =>{

switch(action.type) {
    case 'ON_SUBMIT': 
    console.log(`action`, action)
    return action.payload
       
    default:
        return state
}

}

export default Reducer;