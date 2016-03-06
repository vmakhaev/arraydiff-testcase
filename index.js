var arraydiff = require('arraydiff')

var before = 'lhlkajshdlfkjhalksjdhflkjahsdlkjfhlakjsdhflkjashdlkjfhalkjsdhflkajsdhlfjkalsdfhlakjsdfh'
var after = before.slice(0, 20) + before.slice(21)
console.log(before)
console.log(after)

var diffs = arraydiff(before, after)
console.log(diffs)
