import React from 'react'

import styles from './signIn.less'

const SignIn = () => (
	<section className='page'>
		<h1>Welcome!</h1>
		<p className={styles.paragraph}><a href='/sign-in' className='link'>Sign in</a> with your Google account to start using <span className={styles.catsTrack}>CatsTrack</span>.</p>
	</section>
)

export default SignIn
