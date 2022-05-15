import { createSlice } from '@reduxjs/toolkit'

export const Main = createSlice({
    name: 'Main',
    initialState: {
        TopMenuIssueModal: false
    },
    reducers: {
        ChangeTopMenuIssueModal: (state, action) => {
            state.TopMenuIssueModal = action.payload.TopMenuIssueModal
        }
    }
})

// Action creators are generated for each case reducer function
export const { ChangeTopMenuIssueModal } = Main.actions

export default Main.reducer