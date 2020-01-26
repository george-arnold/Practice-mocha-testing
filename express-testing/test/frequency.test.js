const { expect } = require("chai");
const supertest = require("supertest");
const app = require("../app");

describe('GET /frequency endpoint', () => {
  it("should work if numbers are included", () => {
    return supertest(app)
      .get('/frequency')
      .query({ s: 'AAa1BB' })
      .expect(200)
      .then(res => {
        expect(res.body).to.deep.equal({ 
          unique: 3,
          average: 2,
          highest: 'a',
          'a': 3,
          'b': 2,
          '1': 1
        })
      })
  } )

})