'use client'

import {useEffect, useRef} from 'react'
import {useLogout} from '@/lib/auth/use-logout'
import {createAuthClient} from 'better-auth/react'
import {toast} from 'sonner'

const {useSession} = createAuthClient()

const INACTIVITY_TIMEOUT = 5 * 60 * 1000 // 30 minutes in milliseconds

export const ActivityTracker = () => {
	const {data: session} = useSession()
	const {logout} = useLogout()
	const timeoutRef = useRef<NodeJS.Timeout>()

	useEffect(() => {
		if (!session) return

		const resetTimer = () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}

			timeoutRef.current = setTimeout(() => {
				if (session) {
					toast('You have been logged out due to inactivity')
					logout()
				}
			}, INACTIVITY_TIMEOUT)
		}

		// Reset timer on mount
		resetTimer()

		// Add event listeners for user activity
		const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']

		const handleActivity = () => {
			resetTimer()
		}

		events.forEach(event => {
			document.addEventListener(event, handleActivity)
		})

		return () => {
			// Cleanup
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
			events.forEach(event => {
				document.removeEventListener(event, handleActivity)
			})
		}
	}, [logout, session])

	return null
}
