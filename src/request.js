// @flow strict
const request = (url: string, callback: string => void) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function response() {
    callback(this.response);
  });
  xhr.open("GET", url);
  xhr.send();
};

export default request;
