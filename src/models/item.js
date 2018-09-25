// @flow strict
import dateFormat from "../dateFormat";
import getElement from "../getElement";

export type Item = {
  title: string,
  uri: string,
  date: string
};

export const fromElement = (item: HTMLElement): Item => ({
  title: getElement(item, "title"),
  uri: getElement(item, "link"),
  date: dateFormat(new Date(Date.parse(getElement(item, "pubDate"))))
});

export const render = ({ title, uri, date }: Item): string => `
<dt>${date}</dt>
<dd><a href=${uri}>${title}</a></dd>
`;
