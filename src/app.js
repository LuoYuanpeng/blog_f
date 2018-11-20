import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './page/home/home_page'
import UserPage from './page/user/user_page'
import RegPage from './page/reg/reg_page'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state={}
	}

	componentDidMount() {
		console.log(1111)
	}

	render () {
		return (
			<Switch>
				<Route exact path='/' component={ HomePage } />
				<Route path='/user' component={ UserPage } />
				<Route path='/reg' component={ RegPage } />
			</Switch>
		)
	}
}

export default App
