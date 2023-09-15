import querparser from "query-string";
import SuperFetch from "./SuperFetch";

class allContactsRepo {
  getAll(query = { page_size: 10, page: 1 }) {
    return SuperFetch(`contacts/?${querparser.stringify(query)}`);
  }
  getAllUSCountry(country, query = { page_size: 10, page: 1 }) {
    return SuperFetch(
      `country-contacts/${country}/?${querparser.stringify(query)}`
    );
  }
}

export default new allContactsRepo();
