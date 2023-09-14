import querparser from "query-string";
import SuperFetch from "./SuperFetch";

class allContactsRepo {
  getAll(query = { limit: 10, page: 1 }) {
    return SuperFetch(`api-doc?${querparser.stringify(query)}`);
  }
}

export default new allContactsRepo();
