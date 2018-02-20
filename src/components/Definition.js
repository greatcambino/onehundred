import React from 'react'


const Definition = props => {
    let def = props.def
    let idx = props.idx

    let styles = {
        color: 'grey', 
    }

    return (
        <div
            className="card text-center"
            style={styles}>
            <h5> def { idx + 1 }:  { def.definitions[0] }   </h5>
        </div>
    )
}

export default Definition