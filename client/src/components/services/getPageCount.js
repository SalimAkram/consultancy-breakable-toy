const getPageCount = (total, pageSize) => {
  let pageCount;
  if (total) {
    pageCount = Array.from(Array(total / pageSize).keys());
  }
  return pageCount;
};
export { getPageCount };
