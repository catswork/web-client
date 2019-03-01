import { observer } from 'mobx-react'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import userState from 'state/userState'

import Nav from './Nav'
import Dashboard from './Dashboard'
import Profile from './Profile'

import SignIn from 'presentation/SignIn'
import NotFound from 'presentation/NotFound'

@observer
class App extends React.Component {

	componentWillMount() {
		userState.load()
	}

	render() {
		if (userState.$user === undefined) {
			return null
		}

		let routes
		if (userState.$user) {
			routes = (
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route exact path='/profile' component={Profile} />
					<Route component={NotFound} />
				</Switch>
			)
		}
		else {
			routes = (
				<Switch>
					<Route exact path='/' component={SignIn} />
					<Route component={NotFound} />
				</Switch>
			)
		}

		return (
			<BrowserRouter>
				<section>
					<Nav />
					{routes}
				</section>
			</BrowserRouter>
		)
	}

}

export default App
