import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Sort = props => { 
    const {min, max} = props
    const random = parseInt(Math.random()*(max - min)) + min

    return (

        <Card purple title="Sorteio de Número">

            <div>
                <span>Resultado: </span>
                <strong>{random}</strong>
            </div>

        </Card>

    )
}

const mapStateToProps = state => { 
    return { 
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sort)