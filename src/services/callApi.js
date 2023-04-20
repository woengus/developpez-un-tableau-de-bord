import axios from "axios";
import { Activity, Performance, User, Session } from "../models";
//@ts-check

/**
 *
 * @returns {Promise}
 */
const getSession = async (id) => {
  try {
    const result = await axios(
      `http://localhost:3000/user/${id}/average-sessions`
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
const getActivity = async (id) => {
  try {
    const result = await axios(`http://localhost:3000/user/${id}/activity`);

    return result.data.data.sessions.map((activity) => new Activity(activity));
  } catch (error) {
    console.log(error);
  }
};

/**
 *
 * @returns {Promise}
 */
const getPerformance = async (id) => {
  try {
    const result = await axios(`http://localhost:3000/user/${id}/performance`);

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
const getData = async (id) => {
  try {
    const result = await axios(`http://localhost:3000/user/${id}`);

    return new User(result.data.data);
  } catch (error) {
    console.log(error);
  }
};
export { getSession, getActivity, getPerformance, getData };
