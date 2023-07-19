import axios from "axios";
import cacheWrapper from "../utils/cache";

export const search = cacheWrapper(async (value: string) => {
  console.info("calling api");
  try {
    const res = await axios.get(`http://localhost:4000/sick?q=${value}`);
    const { data } = res;
    return data;
  } catch (e) {
    console.log(e);
  }
});
