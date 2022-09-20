import React from "react";
import "./Interval.css"
import Card from "./Card";

export default props => {
  
    return (
        <Card red title="Intervalo de Números">
            <div className="Interval">
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={0} />
            </span>

            <span>
                <strong> Máximo:</strong>
                <input type="number" value={10} />
            </span>

            </div>
        </Card>
    )
}