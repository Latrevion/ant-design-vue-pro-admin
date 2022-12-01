
function chart(method) {
  switch (method) {
    case "GET":
      res=[20,40,20,80,100,59];
      break;
    default:
      res = null;
      break;
  }
  return res;
}

module.exports = chart;
