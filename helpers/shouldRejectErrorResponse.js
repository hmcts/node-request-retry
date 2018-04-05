/**
 * Checks if the options.simple is set to use default.
 * By default, http response codes other than 2xx will cause the promise to be rejected. This can be overwritten by setting `options.simple = false`.
 *
 * @param options a request.options object
 * @return boolean true if non successful response should be rejected, otherwise false
 */
function shouldRejectErrorResponse (options) {
  if (!options) {
    return true;
  }
  return options.simple === undefined || options.simple === true;
}

module.exports = shouldRejectErrorResponse;
