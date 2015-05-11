"use strict";


module.exports = function salestax( options ) {

  var rate    = options.rate
  var reduced = options.reduced

  this.add('role:salestax,cmd:calculate',calculate)


  function calculate( args, done ) {
    var total = args.net * (1+rate)

    if( 'hotel' === args.category ) {
      total = args.net * (1+reduced)
    }

    done( null, { total:total, country:'ie', category:args.category } )
  }
}
