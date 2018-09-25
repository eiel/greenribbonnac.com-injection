// @flow strict
import rssSummary from "./rssSummary";

const url = "/rss/blog/index.rss";
const selector = ".news";
rssSummary({ document, selector, url });
