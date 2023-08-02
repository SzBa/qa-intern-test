import qs from "query-string";
import { expect } from "chai";

export const shouldHaveProperties = (obj, requiredProperties) => {
  for (const property of requiredProperties) {
    expect(obj).to.deep.nested.property(property);
  }
};

export const stringifyUrl = (url, query) => {
  return qs.stringifyUrl(
    {
      url,
      query,
    },
    {
      skipEmptyString: true,
      arrayFormat: "bracket",
      skipNull: true,
    }
  );
};
