const initialState = {
  tracks: ['Nirvana - About A Girl', 'The Beatles - Yesterday']
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD' :
        return {
            ...state,
            tracks:[...state.tracks, action.payload]
        };
      case 'DELETE' :
        let tracks = [...state.tracks];
        tracks.splice(action.id, 1);
        return  {
            ...state,
            tracks
        };
      default :
        return state
  }
};

export default playlistReducer