// @flow strict
import rssSummary from "./rssSummary";

const url = "/rss/blog/index.rss";
const selector = "body";
rssSummary({ document, selector, url });
