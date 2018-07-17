import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stars from './Stars'
import { getStars } from './redux'

class StarList extends Component {
    constructor(props) {
        super(props)
        this.state = { value: 'hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.getStars(this.state.value)
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
            <div className="starList">
                <div className="Cosmos"></div>
                <form onSubmit={this.handleSubmit}>
                    <label className="dropMenu">
                        Pick a star:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="hubble-observes-one-of-a-kind-star-nicknamed-nasty_17754652960_o">Nasty</option>
                            <option value="PIA22081">Tabby's Star</option>
                            <option value="GSFC_20171208_Archive_e001894">A Star Formation Laboratory</option>
                            <option value="GSFC_20171208_Archive_e000282">Heavy Metal Stars</option>
                            <option value="GSFC_20171208_Archive_e000383">Hubble Sees a Star ‘Inflating’ a Giant Bubble</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                    {strList}
                </form>
            </div>

        )
    }
}


// connect to redux for the array of stars
export default connect(state => state, { getStars })(StarList)