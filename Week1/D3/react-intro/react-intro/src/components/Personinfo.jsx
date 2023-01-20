import React from "react";

const Personinfo = (props) => {
    return (
        <div>
            <h2>{props.firstname},{props.lastname}</h2>
            <h3>Age:{props.age} </h3>
            <h4>HairColor:{props.hair_color}</h4>
        </div>
    )
}

export default Personinfo;