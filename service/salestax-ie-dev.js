var PORT = process.env.PORT || 51004

require('seneca')()
  .use('..', {rate:0.21,reduced:0.09} )
  .listen( PORT )
