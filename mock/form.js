function chart(method) {
    let response = null;
    switch (method) {
      case "POST":
        response = {message:'OK'}
        break;
      default:
        response = null;
        break;
    }
    return response;
  }
  
  module.exports = chart;
  