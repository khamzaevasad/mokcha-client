import axios from "axios";
import { serverApi } from "../lib/config";
import { Member } from "../lib/types/member";

class MemberService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  // topUsers
  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = `${this.path}/member/top-users`;
      const result = await axios.get(url);
      console.log("result", result);
      return result.data;
    } catch (err) {
      console.log("ERROR getTopUsers", err);
      throw err;
    }
  }

  //getRestaurant
  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      console.log(result.data);
      return result.data;
    } catch (err) {
      console.log("ERROR getRestaurant", err);
      throw err;
    }
  }
}

export default MemberService;
