import React from "react";

function HeroList(props) {
    const supers = props.superHeroes.map((superHero, index) => {
        return <div key={superHero.name + index}>
            <h1>{superHero.name}</h1>
            <img src={superHero.imageUrl} alt="" />
        </div>
    })
    return (
        <div>
            {supers}
        </div>
    )
}

export default HeroList;

// const heros = props.superHeroes.map(() => <HeroList />)
