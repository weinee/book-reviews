export default (entries = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return entries;
    case "CREATE":
      return entries;
    default:
      return { ...entries };
      break;
  }
};
