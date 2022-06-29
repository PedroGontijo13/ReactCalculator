import { ACButton } from "../styles/styles"
import { NewType } from "./NewType"

type WhatDO = NewType

export default function ButtonP(props: WhatDO) {
    let classes = 'button'
    classes += props.span ? props.span : ''
    classes += props.operation ? 'op' : ''

    return (
        <ACButton className={classes} onClick={() => props.function(props.label)}>
            {props.label}
        </ACButton>
    )
}