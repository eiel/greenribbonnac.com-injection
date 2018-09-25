// @flow strict
import request from "./request";
import render from "./render";
import xmlParse from "./xmlParse";
import { fromElement, render as itemRender } from "./models/item";

type Options = {
  document: Document,
  selector: string,
  url: string
};

const rssSummary = ({ document, selector, url }: Options) => {
  request(url, res => {
    const doc = xmlParse(res);
    const items = doc.querySelectorAll("item");
    const children = Array.from(items)
      .map(fromElement)
      .map(itemRender)
      .slice(0, 5)
      .join("");
    Array.from(document.querySelectorAll(selector)).forEach(elem => {
      // eslint-disable-next-line no-param-reassign
      elem.innerHTML = render({ children });
    });
  });
};

export default rssSummary;
