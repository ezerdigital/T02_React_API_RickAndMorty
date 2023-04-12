import axios from "axios";

export class SeriesCharacters {
  static async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
