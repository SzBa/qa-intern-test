import { stringifyUrl } from "../helpers.js";

export const getShowSearchDefaultQueryParams = {
  q: "girls",
  embed: undefined,
};

export const showSearchUrl = (query = getShowSearchDefaultQueryParams) => {
  const url = "/search/shows";

  return stringifyUrl(url, {
    ...getShowSearchDefaultQueryParams,
    ...query,
  });
};

export const getShowSearchRequiredProperties = [
  "score",
  "show",
  "show.id",
  "show.url",
  "show.name",
  "show.type",
  "show.language",
  "show.genres",
  "show.status",
  "show.runtime",
  "show.averageRuntime",
  "show.premiered",
  "show.ended",
  "show.officialSite",
  "show.schedule",
  "show.schedule.time",
  "show.schedule.days",
  "show.rating",
  "show.rating.average",
  "show.weight",
  "show.network",
  "show.network.id",
  "show.network.name",
  "show.network.country",
  "show.network.country.name",
  "show.network.country.code",
  "show.network.country.timezone",
  "show.network.officialSite",
  "show.webChannel",
  "show.dvdCountry",
  "show.externals",
  "show.externals.tvrage",
  "show.externals.thetvdb",
  "show.externals.imdb",
  "show.image",
  "show.image.medium",
  "show.image.original",
  "show.summary",
  "show.updated",
  "show._links",
  "show._links.self",
  "show._links.self.href",
];

export const error = {
  name: "Bad Request",
  message: "Missing required parameters: q",
};
