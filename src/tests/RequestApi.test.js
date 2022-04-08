import supertest from "supertest";
import app from "../app.js";
import assert from 'assert'

describe("Testes das requisições da api", function () {
   const MOCK_RESPONSE_API = {
      _id: "624eec81d113f6cd1597acb4",
      number: 5,
      title: "Ó desce, fogo santo",
      chorus:
         "Eu tudo a Deus consagro em Cristo, o vivo altar; ó desce, fogo santo, Do céu vem tu selar!",
      music: {
         verse1:
            "Espírito, alma e corpo, oferto a Ti, Senhor, como hóstia verdadeira, em oblação de amor.",
         verse2:
            "Sou teu, ó Jesus Cristo! Teu sangue me comprou; eu quero a Tua graça, Pois de Ti sempre sou.",
         verse3:
            "Espírito divino, Do Pai a promissão; Sedenta a alma pede, a Ti, a santa unção. J.R.",
      },
      video: "https://youtu.be/C2Cp2DiFij4",
   };

   it("GET /hinos deve retornar o status 200", (done) => {
      supertest(app)
         .get("/hinos")
         .expect(200)
         .end((error, res) => {
            if (error) assert(error);
            done()
         });
   });

   it("GET /hinos/number/5 deve retornar um objeto", (done) => {
      supertest(app)
         .get("/hinos/number/5")
         .expect(MOCK_RESPONSE_API)
         .end((error, res) => {
            if (error) assert(error);
            done()
         });
   });

   it("GET /hinos/title/desce deve retornar um objeto", (done) => {
      supertest(app)
         .get("/hinos/title/desce")
         .expect(MOCK_RESPONSE_API)
         .end((error, res) => {
            if (error) assert(error);
            done()
         });
   });

   it("GET /hinos/chorus/fogo santo deve retornar um objeto", (done) => {
      supertest(app)
         .get("/hinos/chorus/fogo")
         .expect(MOCK_RESPONSE_API)
         .end((error, res) => {
            if (error) assert(error);
            done()
         });
   });
});
