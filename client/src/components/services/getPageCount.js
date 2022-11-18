const getPageCount = (total, pageSize) => {
  let pageCount;
  if (total) {
    pageCount = Array.from(Array(Math.ceil(total / pageSize)).keys());
  }
  return pageCount;
};
export { getPageCount };
