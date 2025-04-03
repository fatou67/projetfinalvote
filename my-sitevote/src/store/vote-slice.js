import {createSlice} from "@reduxjs/toolkit";

const currentVoter = {id: 'v1', token: "sfsdfdfsd", isAdmin: true};
const initialState = {
    selectedVoteCandidate: "",
    currentVoter,
    selectedElection: "",
    idOfElectiontoUpdate: null, // Initialize with a default value
    addCandidateElectionId: null // Initialize with a default value
};

const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
        changeSelectedVoteCandidate(state, action) {
            state.selectedVoteCandidate = action.payload;
        },
        changeIdOfCandidateElectionId(state, action) {
            state.addCandidateElectionId = action.payload;
        },
        changeAddOfCandidateElectionId(state, action) {
            state.addCandidateElectionId = action.payload;
        }
    }
});

export const voterActions = voteSlice.actions;
export default voteSlice;
