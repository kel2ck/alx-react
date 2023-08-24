import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
	login,
	logout,
	hideNotificationDrawer,
	displayNotificationDrawer,
} from './uiActionCreators';

describe('tests for UI notification action creators', () => {
	it('should create proper action for login', () => {
		const email = 'kelvin@gmail.com';
		const password = 'kelkel';

		expect(login(email, password)).toEqual({
			type: LOGIN,
			user: { email: 'kelvin@gmail.com', password: 'kelkel' },
		});
	});

	it('should create proper action for logout', () => {
		expect(logout()).toEqual({ type: LOGOUT });
	});

	it('should create proper action for displaying notification drawer', () => {
		expect(displayNotificationDrawer()).toEqual({
			type: DISPLAY_NOTIFICATION_DRAWER,
		});
	});

	it('should create proper action for hiding notification drawer', () => {
		expect(hideNotificationDrawer()).toEqual({
			type: HIDE_NOTIFICATION_DRAWER,
		});
	});
});