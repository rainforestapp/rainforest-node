'use strict';

function RainforestError(message) {
  // TODO(jon): Verify that this isn't a bug. Looks like a cyclical issue.
  if(!(this instanceof RainforestError)) {
    return new RainforestError(message, apiMethod);
  }

  this.message = message;
  this.stack = (new Error(this.message)).stack;
}

RainforestError.prototype = Object.create(Error.prototype);

module.exports = RainforestError;
