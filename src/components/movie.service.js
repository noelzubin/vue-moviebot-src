const axios = require('axios');

export default class MovieService {

  getReply(userDialogue) {
    this.userDialogue = userDialogue;
    return axios.get(`https://tacoe.000webhostapp.com/api/moviedialogue/${userDialogue}`)
      .then(data => data)
      .catch((e) => {
        console.log(e);
      });
  }
}
