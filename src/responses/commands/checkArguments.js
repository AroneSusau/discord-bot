const checkArguments = (fn, expected, parsed, input) => {
  const args = parsed.arguments.length
  if (args == expected) {
    return fn(parsed, input)
  } else return 'Invalid command, incorrect arguments.'
}

module.exports = checkArguments