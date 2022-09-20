import React from "react";
import "./Interval.css"
import Card from "./Card";
import { connect } from "react-redux";

import { alterNumberMin, alterNumberMax } from "../store/actions/numbers";


const Interval = props => {
    const {min, max } = props

    props.alterMin(10000)
    props.alterMax(500000)

    return (
        <Card red title="Intervalo de Números">
            <div className="Interval">
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={min} />
            </span>

            <span>
                <strong> Máximo:</strong>
                <input type="number" value={max} />
            </span>

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

const mapActionCreatorsToProps = dispatch => { 
    return { 
        alterMin(newNumber) { 
            const action = alterNumberMin(newNumber);

            dispatch(action)
        },
        alterMax(newNumber) { 
            const action = alterNumberMax(newNumber);

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Interval)