import React from 'react'
import './Definition.css'

const Definition = props => {
    let def = props.def
    let idx = props.idx


    return (
        <div> 
            <h5> def. { idx + 1 }:  { def.definitions[0] }</h5>
        </div>
    )
}

export default Definition