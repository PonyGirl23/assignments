import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stars from './Stars'
import { getStars } from './redux'

class StarList extends Component {
    componentDidMount() {
        this.props.getStars()
    }
    render() {
        const strList = this.props.stars.map(star => {
            {/* {map through stars and render <Stars /> 
        for each one, passing in the necessary props} */}
            return (
                <Stars
                    key={star.data[0].nasa_id}
                    img={star.links[0].href}
                    name={star.data[0].title}
                    info={star.data[0].description} />
            )
        })
        console.log(this.props)
        return (
            <div>
                {strList}
            </div>
        )
    }
}


// connect to redux for the array of stars
export default connect(state => state, { getStars })(StarList)