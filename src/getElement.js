// @flow strict
const getElement = (item: HTMLElement, tagName: string) => {
  const elementList = item.getElementsByTagName(tagName);
  if (elementList.length === 1) {
    return elementList[0].textContent;
  }
  throw new Error("not found title element");
};

export default getElement;
