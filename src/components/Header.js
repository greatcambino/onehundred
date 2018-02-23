import React from 'react'
import './Header.css'
import { Header } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

let styles = {
    backgroundColor: '#1B1B18'
}

const Header1 = () => (
    <div className="h1" class="ui centered header" >
        <Segment style={styles} >
            <a href="/">ONE HUNDRED</a>
            <h2>- LEARN  1  WORD  BY  WRITING  100 -</h2>
        </Segment>
    </div>
)

export default Header1





