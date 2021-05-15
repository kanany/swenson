var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe("Coffee machines and coffee pods listing unit test",function(){

  // #1 should return coffee machines data
  it("should return coffee machines data",function(done){
    // Calling coffee machines listing api
    server
    .get("/coffee_machines?product_type=COFFEE_MACHINE_LARGE")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){

      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false)
      // Coffee machines data should be array.
      res.body.coffee_machines.should.be.an.Array();
      
      done();
    });
  });

  // #2 should return coffee pods data
  it("should return coffee pods data",function(done){
    // calling coffee pods listing api
    server
    .get("/coffee_pods?product_type=COFFEE_POD_LARGE")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){

      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false)
      // Coffee pods data should be array.
      res.body.coffee_pods.should.be.an.Array();

      done();
    });
  });

  it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  });

});