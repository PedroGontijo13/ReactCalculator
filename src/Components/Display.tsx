type WhatDO = {
    value: string | number
}

export default function (props: WhatDO) {
    return (
        <div className='display'> {props.value} </div>
    );
}