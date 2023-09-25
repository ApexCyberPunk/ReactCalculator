import {useReducer} from 'react'
import DigitButton from './DigitButton'
import OperationButton from './OperationButton'
import './style.css'

export const ACTIONS = {
        ADD_DIGIT:  'add-digit',
        CHOOSE_OPERATION: 'choose-operation',
        CLEAR: 'clear',
        DELETE_DIGIT: 'delete-digit',
        EVALUATE: 'evaluate',
       
}

function reducer(state, {type, payload}) {
    switch(type) {

        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") {
                return state
            }
            if (payload.digit === "." && state.currentOperand.includes('.')) {
                return state
            }


            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`
            }

            case ACTIONS.CHOOSE_OPERATION:
                if (state.currentOperand == null && state.previousOperand == null) {
                    return state;
                }
                if (state.previousOperand == null) {
                    return {
                        ...state,
                        operation: payload.operation,
                        previousOperand: state.currentOperand,
                        currentOperand: null,
                    }
                }

                return {
                    ...state,
                    previousOperand: evaluate(state),
                    operation: payload.operation,
                    currentOperand: null
                }
                 case ACTIONS.CLEAR:
                // returns to initial state as if nothing happened
            return {}

            default: return state;
                // nothing
    }
}

function App() {
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  
  
    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand}{operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
<button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
<button>DEL</button>
<OperationButton operation="÷" dispatch={dispatch}></OperationButton>
<DigitButton digit="1" dispatch={dispatch}></DigitButton>
<DigitButton digit="2" dispatch={dispatch}></DigitButton>
<DigitButton digit="3" dispatch={dispatch}></DigitButton>
<OperationButton operation="*" dispatch={dispatch}></OperationButton>
<DigitButton digit="4" dispatch={dispatch}></DigitButton>
<DigitButton digit="5" dispatch={dispatch}></DigitButton>
<DigitButton digit="6" dispatch={dispatch}></DigitButton>
<OperationButton operation="+" dispatch={dispatch}></OperationButton>
<DigitButton digit="7" dispatch={dispatch}></DigitButton>
<DigitButton digit="8" dispatch={dispatch}></DigitButton>
<DigitButton digit="9" dispatch={dispatch}></DigitButton>
<OperationButton operation="-" dispatch={dispatch}></OperationButton>
<DigitButton digit="0" dispatch={dispatch}></DigitButton>
<DigitButton digit="." dispatch={dispatch}></DigitButton>
<button className="span-two">=</button>
        </div>
    )
}



export default App