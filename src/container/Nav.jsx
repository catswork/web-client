import { observer } from 'mobx-react'
import React from 'react'

import userState from 'state/userState'

import NavDisplay from 'presentation/Nav'

@observer
class Nav extends React.Component {

	render() {
		return <NavDisplay user={!!userState.$user} />
	}

}

export default Nav
