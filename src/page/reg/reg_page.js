import React from 'react'
import axios from 'axios'

class RegPage extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			pwd: '',
		}
	}

	changeName(evt) {
		this.setState({
			name: evt.target.value,
		})
	}

	changePwd(evt) {
		this.setState({
			pwd: evt.target.value,
		})
	}

	submit() {
		axios.post('http://localhost:8888/api/register', {
			name: this.state.name,
			pwd: this.state.pwd,
		})
			.then(res => {
				console.log(res)	
			})
	}

	render() {
		return (
			<div>
				<input placeholder='name' onChange={e => this.changeName(e)} />
				<input placeholder='password' value={this.state.pwd} onChange= {e => this.changePwd(e)} />
				<button onClick={e => this.submit(e)}>submit</button>
			</div>
		)
	}
}

export default RegPage

