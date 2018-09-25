// @flow strict
import rssSummary from "./rssSummary";

const url = "/rss/blog/";
const selector = ".news";
rssSummary({ document, selector, url });
