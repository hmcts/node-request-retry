/**
 * Checks if the returned response is an error response.
 *
 * @param response a Node's http.IncomingMessage object
 * @return boolean true if the response status is 4XX or 5XX
 */
function isErrorResponse(response) {
  return 400 <= response.statusCode && response.statusCode < 600;
}

module.exports = isErrorResponse;
