const getPageCount = (total: number, pageSize: number): number[] => {
  let pageCount: number[] = [];
  if (total) {
    pageCount = Array.from(Array(Math.ceil(total / pageSize)).keys());
  }
  return pageCount;
};
export { getPageCount };
