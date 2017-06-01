const axios = require('axios');

module.exports = class MovieService {

  getMovieDetails(userDialogue) {
    this.userDialogue = userDialogue;
    return axios.get(`http://api.quodb.com/search/${userDialogue}?titles_per_page=1&phrases_per_title=1&page=1`);
  }

  getNextPhrase(titleId, phraseId) {
    this.titleId = titleId;
    this.phraseId = phraseId;
    return axios.get(`http://api.quodb.com/quotes/${titleId}/${phraseId}`);
  }

  getReply(userDialogue) {
    return this.getMovieDetails(userDialogue)
      .then((resp) => {
        const data = resp.data;
        const titleId = data.docs[0].title_id;
        const phraseId = data.docs[0].phrase_id;
        return this.getNextPhrase(titleId, phraseId);
      })
      .catch(() => {
        throw new Error('Could not fetch dialogue');
      })
      .then((resp) => {
        const data = resp.data;
        const repData = data.docs[3];
        const replyDialogue = { phrase: repData.phrase, movieTitle: repData.title };
        return replyDialogue;
      })
      .catch((e) => {
        console.log(e);
      });
  }

};
