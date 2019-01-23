export const addTrack = (track) => {
    return {
        type: 'ADD',
        payload: track
    }
};

export const deleteTrack = (id) => {
    return {
        type: 'DELETE',
        id: id
    }
};