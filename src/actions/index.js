import * as types from '../constants/ActionTypes'

export function toggleBoxedLayout(isLayoutBoxed) {
    return { type: types.TOGGLE_BOXED_LAYOUT, isLayoutBoxed: isLayoutBoxed }
}
export function togglCollapsedNav(isNavCollapsed) {
    return { type: types.TOGGLE_COLLAPSED_NAV, isNavCollapsed: isNavCollapsed }
}
export function toggleNavBehind(isNavBehind) {
    return { type: types.TOGGLE_NAV_BEHIND, isNavBehind: isNavBehind }
}
export function toggleFixedHeader(isFixedHeader) {
    return { type: types.TOGGLE_FIXED_HEADER, isFixedHeader: isFixedHeader }
}
export function changeSidebarWidth(sidebarWidth) {
    return { type: types.CHANGE_SIDEBAR_WIDTH, sidebarWidth: sidebarWidth }
}
export function changeColorOption(colorOption) {
    return { type: types.CHANGE_COLOR_OPTION, colorOption: colorOption }
}
export function changeTheme(themeOption) {
    return { type: types.CHANGE_THEME, theme: themeOption }
}

//User Actions

export function addUser(user) {
    return { type: types.ADD_NEW_USER, user: user }
}
export function getAllUser(users) {
    return { type: types.GET_ALL_USER, users: users }
}
export function updateSingleUser(user) {
    return { type: types.UPDATE_USER, user: user }
}


