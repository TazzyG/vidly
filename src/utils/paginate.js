import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startindex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startindex)
    .take(pageSize)
    .value();
  // lodash methods
  // _(items) puts in lodash wrapper, creates lodash object
  // _.slice(items, startIndex)
  // _.take()
  // _.value() returns to normal array
}
