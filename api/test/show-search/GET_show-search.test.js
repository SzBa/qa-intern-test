import request from "supertest";
import { config } from "../../config/dev.js";
import {
  error,
  getShowSearchRequiredProperties,
  showSearchUrl,
} from "../../utilities/show-search/show-search.js";
import { shouldHaveProperties } from "../../utilities/helpers.js";
import should from "should";

describe("GET /search/shows", () => {
  it("should get shows by the shows girls name", async () => {
    await request(config.baseUrl)
      .get(showSearchUrl())
      .expect(({ body }) => {
        shouldHaveProperties(body[0], getShowSearchRequiredProperties);
      })
      .expect(200);
  });

  it("should not get shows by the shows name when q is undefined", async () => {
    await request(config.baseUrl)
      .get(showSearchUrl({ q: undefined }))
      .expect(({ body }) => {
        should.equal(body.name, error.name);
        should.equal(body.message, error.message);
      })
      .expect(400);
  });

  // Bug reported to trello
  it("should not get shows by the shows name when q is incorrect value", async () => {
    await request(config.baseUrl)
      .get(showSearchUrl({ q: "cosfgfd" }))
      .expect(({ body }) => {
        should.equal(body.name, error.name);
      })
      .expect(400);
  });
});
