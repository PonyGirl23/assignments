
import React from "react"

function Kill(props) {
    const killList = props.info.map(hit => {
        return <div key={hit._id} className='person'>
                <img  src={hit.image} />
                <div className="name"> {hit.name}</div>
               </div>
    })
    return (
        <div className="container">
            {killList}
        </div>
    )
}

export default Kill
