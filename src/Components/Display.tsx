import { Textfit } from "react-textfit";

type WhatDO = {
    value: string | number
}

export default function (props: WhatDO) {
    return (
        <Textfit mode="single" max={70}> {props.value} </Textfit>
    );
}