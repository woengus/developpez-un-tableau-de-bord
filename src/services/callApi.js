import axios from "axios";

const fetchSession = async () => {
  try {
    const result = await axios(
      `http://localhost:3000/user/12/average-sessions`
    );
    return result.data.data.sessions;
  } catch (error) {
    console.log(error);
  }
};
export { fetchSession };
