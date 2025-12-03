import { serverApi } from "../lib/config";

class MemberSerice {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }
}
