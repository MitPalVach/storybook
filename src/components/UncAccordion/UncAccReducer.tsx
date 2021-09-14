export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const UncAccReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            return state
    }
}