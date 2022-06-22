type WhatDO = {
    label: string, function: any, span ?: string, operation ?: any
}

export default function (props: WhatDO) {
    let classes = 'button'
    classes += props.span ? props.span : ''
    classes += props.operation ? 'op' : ''

    return (
        <button className={classes} onClick={() => props.function(props.label)}>
            {props.label}
        </button>
    )
}