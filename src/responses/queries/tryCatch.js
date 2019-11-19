/**
 * Abstraction for a try catch statement.
 *
 * @param {Function} fn excecuted.
 * @param {Array} args passed to fn.
 * @param {String} err returned if catch called.
 */
const tryCatch = async (fn, args, err = 'Bad Request or Invalid Text') => {
  try {
    return await fn(...args)
  } catch (exception) {
    return err
  }
}

module.exports = tryCatch