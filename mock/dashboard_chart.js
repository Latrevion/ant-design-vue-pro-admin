function chart(method) {
  let response = null;
  switch (method) {
    case "GET":
      response = [20, 40, 20, 80, 100, 59];
      break;
    default:
      response = null;
     
  }
  return response;
}

module.exports = chart;
