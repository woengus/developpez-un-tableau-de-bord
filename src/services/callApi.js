import axios from "axios";
import { Activity, Performance, User, Session } from "../models";
//@ts-check

/**
 *
 * @returns {Promise}
 */
const getSession = async () => {
  try {
    const result = await axios(
      `http://localhost:3000/user/12/average-sessions`
    );

    return result.data.data.sessions.map((session) => new Session(session));
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @returns {Promise}
 */
const getActivity = async () => {
  try {
    const result = await axios(`http://localhost:3000/user/12/activity`);

    return result.data.data.sessions.map((activity) => new Activity(activity));
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @returns {Promise}
 */
const getPerformance = async () => {
  try {
    const result = await axios(`http://localhost:3000/user/12/performance`);

    return {
      kind: result.data.data.kind,
      data: result.data.data.data.map(
        (performance) => new Performance(performance)
      ),
    };
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @returns {Promise}
 */
const getData = async () => {
  try {
    const result = await axios("http://localhost:3000/user/12");
    console.log(result.data.data);
    return new User(result.data.data);
  } catch (error) {
    console.log(error);
  }
};
export { getSession, getActivity, getPerformance, getData };
