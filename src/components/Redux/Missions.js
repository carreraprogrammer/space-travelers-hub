const UPDATE = 'UPDATE';
const JOIN_MISSION = 'JOIN_MISSION';

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE:
      return action.payload;
    default:
      return state;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }
        return mission;
      });
  }
};
export const showMissions = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  dispatch({
    type: UPDATE,
    payload: data,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export default missionsReducer;
