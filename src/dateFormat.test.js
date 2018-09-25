// @flow strict
/* eslint-env jest */
import dateFormat from "./dateFormat";

it("dateFormat", () => {
  expect(dateFormat(new Date(2018, 9, 1))).toMatchSnapshot();
});
