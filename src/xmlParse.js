// @flow strict
const xmlParse = (text: string): Document => {
  const parser = new DOMParser();
  return parser.parseFromString(text, "application/xml");
};

export default xmlParse;
