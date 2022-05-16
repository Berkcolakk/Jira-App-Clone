import { createSlice } from '@reduxjs/toolkit'

export const Navbar = createSlice({
    name: 'Navbar',
    initialState: {
        UserProfileMenu: false,
        IssueCreateButton: false
    },
    reducers: {
        UserProfileMenuChange: (state, action) => {
            state.UserProfileMenu = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { UserProfileMenuChange } = Navbar.actions

export default Navbar.reducer