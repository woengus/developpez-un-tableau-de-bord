import axios from "axios";
import { Activity } from "../models";

const getSession = async () => {
  try {
    const result = await axios(
      `http://localhost:3000/user/12/average-sessions`
    );
    return result.data.data.sessions;
  } catch (error) {
    console.log(error);
  }
};
const getActivity = async () => {
  try {
    const result = await axios(`http://localhost:3000/user/12/activity`);
    return result.data.data.sessions.map((activity) => new Activity(activity));
  } catch (error) {
    console.log(error);
  }
};
const getPerformance = async () => {
  try {
    const result = await axios(`http://localhost:3000/user/12/performance`);
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};
const getData = async () => {
  try {
    const result = await axios("http://localhost:3000/user/12");
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
};
export { getSession, getActivity, getPerformance, getData };
