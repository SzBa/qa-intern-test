import request from "supertest";
import { config } from "../../config/dev.js";
import {
  getShowSearchRequiredProperties,
  showSearchUrl,
} from "../../utilities/show-search/show-search.js";
import { shouldHaveProperties } from "../../utilities/helpers.js";

describe("GET /search/shows", () => {
  it("should get all the shows by the shows name girls", async () => {
    await request(config.baseUrl)
      .get(showSearchUrl())
      .expect(({ body }) => {
        shouldHaveProperties(body, getShowSearchRequiredProperties);
      })
      .expect(200);
  });
});
