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
  "show.network.county.name",
  "show.network.county.code",
  "show.network.county.timezone",
  "show.network.officialSite",
  "show.webChannel",
  "show.dvdCountry",
  "show.externals",
  "show.externals.tvrage",
  "show.externals.thetvdb",
  "show.externals.imdb",
  "show.externals.image",
  "show.externals.image.medium",
  "show.externals.image.original",
  "show.externals.summary",
  "show.externals.updated",
  "show.externals._links",
  "show.externals._links.self",
  "show.externals._links.self.href",
];
