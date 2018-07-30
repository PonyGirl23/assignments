import React, { Component } from 'react'
import { connect } from 'react-redux'
import Star from './Star'
import { getStars } from './redux'

class StarList extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 'hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.props.getStars();
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        const strList = this.props.stars.filter(star => star.data[0].nasa_id === this.state.value).map(star => {
            {/* {map through stars and render <Stars /> 
        for each one, passing in the necessary props} */}
            return (
                <Star
                    key={star.data[0].nasa_id}
                    img={star.links[0].href}
                    name={star.data[0].title}
                    info={star.data[0].description} />
            )
        })
        return (
            <div className="starList">
                <div className="Cosmos"></div>
                <form onSubmit={this.handleSubmit}>
                    <label className="dropMenu">
                        Pick a star:
                        <select value={this.state.value} onChange={this.handleChange}>
                            {this.props.stars.map(star => {
                                return <option key={star.data[0].nasa_id} value={star.data[0].nasa_id}>{star.data[0].title}</option>
                            })}
                        </select>
                    </label>
                    {strList}
                </form>
            </div>

        )
    }
}


// connect to redux for the array of stars
export default connect(state => state, { getStars })(StarList)