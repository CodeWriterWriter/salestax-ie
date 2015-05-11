var PORT = process.env.PORT || 51004

require('seneca')()
  .use('..', {rate:0.20,reduced:0.09} )
  .listen( PORT )
