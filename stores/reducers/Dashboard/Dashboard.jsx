import { createSlice } from '@reduxjs/toolkit'

export const Dashboard = createSlice({
    name: 'Dashboard',
    initialState: {
        TopMenuIssueModal: false
    },
    reducers: {
        ChangeTopMenuIssueModal: (state, action) => {
            state.TopMenuIssueModal = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { ChangeTopMenuIssueModal } = Dashboard.actions

export default Dashboard.reducer