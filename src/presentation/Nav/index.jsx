import React from 'react'
import { NavLink, Link, Route } from 'react-router-dom'

import styles from './nav.less'

class Nav extends React.Component {

	render() {
		let right
		if (this.props.user) {
			right = <NavLink to='/profile' className={styles.user} />
		}
		else {
			right = <a href='/sign-in' className='button' onClick={this.props.onSignIn}>Sign in</a>
		}

		return (
			<nav className={styles.nav}>
				<NavLink to='/' className={styles.logo} />
				<div className={styles.right}>{right}</div>
			</nav>
		)
	}

}

export default Nav
