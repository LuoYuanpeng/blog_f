import React from 'react'
import axios from 'axios'

class HomePage extends React.Component {

	componentDidMount() {
		axios.post('http://localhost:8888/api/login', {
			name: 'luo',
			password: '123123'
		})
			.then(res => {
				console.log(res)
			})
	}

	render () {
		return (
			<div>This is HomePage!</div>
		)
	}
}

export default HomePage
