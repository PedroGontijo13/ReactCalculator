import { useState } from "react"
import Button from "./Button"
import Display from "./Display"

export default function Calculator() {
    //using hook to show the value in the display
    const [valueDisplay, setValueDisplay] = useState<string | number>('0')
    //using hook to clear the value in the display
    const [clearDisplay, setClearDisplay] = useState<boolean>(false)
    //using hook to save witch operation we gonna do
    const [operation, setOperation] = useState(null)
    //using hook to save 2 values to do the operation with both
    const [values, setValues] = useState<number[]>([0, 0])
    //using hook to help to do the operation 1 time
    const [index, setIndex] = useState(0)

    function isFloat(n: number | string) {
        return n === +n && n !== (n | 0);
    }

    function _add(label: string) {
        //Verify if have just one dot "."
        if (label === '.' && isFloat(valueDisplay)) return

        //Remove the zero on left and check the variable clearDisplay
        const check_clearDisplay = valueDisplay === '0' || clearDisplay
        const nowValue = check_clearDisplay ? '' : valueDisplay

        //Do the sum
        const newValue = nowValue + label
        //Save the numbers in respective positions
        const newValues = [...values]

        //Verify if its float
        if (label !== '.') newValues[index] = parseFloat(newValue)

        setValueDisplay(newValue)
        setClearDisplay(false)
        setValues(newValues)
    }

    function _operation(operation_clicked: null) {
        if (values[0] === 0) return

        if (index === 0) {
            setIndex(1)
            setOperation(operation_clicked)
            setClearDisplay(true)
        } else {
            const equal = operation_clicked
            const newValues = [...values]

            try {
                newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`)
            } catch (error) {
                newValues[0] = values[0]
            }
            newValues[1] = 0;
            const newValue = newValues[0]

            setValueDisplay(newValue)
            setClearDisplay(!equal)
            setOperation(equal ? null : operation_clicked)
            setValues(newValues)
            setIndex(equal ? 0 : 1)
        }
    }

    function _clear() {
        setValueDisplay('0')
        setClearDisplay(false)
        setOperation(null)
        setValues([0, 0])
        setIndex(0)
    }

    return (
        <div className='calculadora'>
            <Display value={valueDisplay}></Display>

            <Button label='AC' function={_clear} span='span-3'></Button>
            <Button label='/' function={_operation} operation></Button>
            <Button label='7' function={_add} ></Button>
            <Button label='8' function={_add} ></Button>
            <Button label='9' function={_add} ></Button>
            <Button label='*' function={_operation} operation></Button>
            <Button label='4' function={_add} ></Button>
            <Button label='5' function={_add} ></Button>
            <Button label='6' function={_add} ></Button>
            <Button label='-' function={_operation} operation></Button>
            <Button label='1' function={_add} ></Button>
            <Button label='2' function={_add} ></Button>
            <Button label='3' function={_add} ></Button>
            <Button label='+' function={_operation} operation></Button>
            <Button label='0' function={_add} span='span-2'></Button>
            <Button label='.' function={_add} ></Button>
            <Button label='=' function={_operation} operation></Button>
        </div>
    )
}