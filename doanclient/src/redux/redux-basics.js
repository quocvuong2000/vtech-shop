import axios from "axios";

const redux;
const createStore = redux.createStore;



//store
const store = createStore(reducer);


//reducer
const reducer = (state,action) => {
    switch (action.type) {
        case "THE HELL":
            return {
                ...state,
                counter : state.counter++
            }
            case  "THEMSANPHAM" : 
            return state.products.concat(action.payload);
        default:
            break;
    }
    return state;
}

//dispatch action

//subscription







