require("./emoexp.js")

// Make a new regex
var reg = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/)

// What is that regex as a string?
console.log(reg.toString())
console.log("\n")

// Does it work?
console.log(reg.test("https://fizzbuzzfridays.com"))
console.log("\n")

// What is that regex as EmoExp?
console.log(reg.toEmoExp())
console.log("\n")

// What is that regex converted from the EmoExp?
var regTwo = fromEmoExp(reg.toEmoExp())

console.log(regTwo.toString())
console.log("\n")

// Does it still work?
console.log(regTwo.test("https://fizzbuzzfridays.com"))
console.log("\n")

// Make this super complex regex
var complexReg = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm)

console.log(complexReg.toEmoExp())
