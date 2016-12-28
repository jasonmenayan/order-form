import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css';

class OrderForm extends React.Component {
	constructor() {
		super()
		this.state = {total: 0, services: [{name: 'Web Development', price: 300, selected: false}, {name: 'Design', price: 400, selected: false}, {name: 'Integration', price: 250, selected: false}, {name: 'Training', price: 220, selected: false}]}
		this.handleSelect = this.handleSelect.bind(this)
	}

	handleSelect(e, i) {
		e.preventDefault()
		let services = this.state.services
		let newTotal = this.state.total
		if (services[i].selected) {
			services[i].selected = false
			newTotal -= services[i].price
		} else {
			services[i].selected = true
			newTotal += services[i].price
		}
		this.setState({services: services, total: newTotal})
	}

	render() {
		let servicePrices = this.state.services.map((service, index) => {
			return (
				<p key={index} className={service.selected ? 'selected' : 'notselected'} onClick={event => this.handleSelect(event, index)}>{service.name} <b>${service.price.toFixed(2)}</b></p>
			)
		})
		return (
			<div id="services">
				{servicePrices}
				<p>Total <b>${this.state.total.toFixed(2)}</b></p>
			</div>
		)
	}
}

ReactDOM.render(
  <OrderForm />,
  document.getElementById('root')
)
