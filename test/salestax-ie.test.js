
var assert = require('assert')

var seneca = require('seneca')()
      .use('..',{rate:0.21,reduced:0.09})

describe('salestax-basic', function(){

  it('happy', function( fin ){
    seneca.act('role:salestax,cmd:calculate,country:ie,net:100', function(err,out){
      if(err) return fin(err);

      try {
        assert.equal( 121, out.total )
        fin()
      }
      catch(e){ fin(e) }
    })
  })


  it('reduced', function( fin ){
    seneca.act(
      'role:salestax,cmd:calculate,country:ie,category:hotel,net:100', 
      function(err,out){
        if(err) return fin(err);

        try {
          assert.equal( 109, Math.floor(out.total) )
          fin()
        }
        catch(e){ fin(e) }
      })
  })

})
