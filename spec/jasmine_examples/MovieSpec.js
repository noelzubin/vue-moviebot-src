const MovieService = require('../../src/components/movie.service');

describe('MovieService', () => {
  let service;
  beforeEach(() => {
    service = new MovieService();
  });

  describe('should return movie details', () => {
    let res = 'initial data';

    beforeEach((done) => {
      service.getMovieDetails('avada kedavra')
        .then((data) => {
          res = data;
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });

    it('should return a movie object', (done) => {
      expect(Object.prototype.hasOwnProperty.call(res.data, 'docs')).toBeTruthy();
      done();
    });
  });

  describe('should return next dialogue', () => {
    let res = 'initial data';

    beforeEach((done) => {
      service.getNextPhrase('M56369b8ec', '43265494')
        .then((data) => {
          res = data;
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });

    it('should return a dialogue object', (done) => {
      expect(Object.prototype.hasOwnProperty.call(res.data.docs[3], 'phrase')).toBeTruthy();
      done();
    });
  });

  describe('integrate getMovie and get Phrase', () => {
    let res = 'initial data';

    beforeEach((done) => {
      service.getReply('avada kedavra')
        .then((data) => {
          res = data;
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    }, 10000);

    it('should return a reply dialogue json object', (done) => {
      console.log(res);
      expect(res).toEqual({ phrase: 'Stupefy', movieTitle: 'Harry Potter and the Deathly Hallows: Part 2' });
      done();
    }, 10000);
  });
});

