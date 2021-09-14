import {StateType, TOGGLE_COLLAPSED, UncAccReducer} from "./UncAccReducer";

test('UncAccReducer should change value to opposite value', () => {
    // data
    const state: StateType = {
        collapsed: true
    }

    // action
    const newState = UncAccReducer(state, {type: TOGGLE_COLLAPSED})

    // expect
    expect(newState.collapsed).toBe(false)
})