/**
 * Checks if the options.simple is set to use default.
 *
 * @param options a request.options object
 * @return boolean true if options.simple is set to use default value
 */
function shouldRejectErrorResponse (options) {
  if(!options) {
    return true;
  }
  return (options.simple === undefined || options.simple === true);
}

module.exports = shouldRejectErrorResponse;
