// strJoin('-', '1', '2', '3') '1-2-3'

function strJoin (separator, ...args) { // ['.', 'h', 'j', 'k']
    return args.join(separator)
}

module.exports = strJoin
