import { observable, action } from 'mobx'

import Status from 'services/Status'
import User from 'models/User'

class UserState {

	@observable.ref $user = undefined

	load() {
		Status.status().then(action((status) => {
			this.$user = status.user ? new User(status.user.id, status.user.email) : null
		}))
	}

}

export default new UserState()
