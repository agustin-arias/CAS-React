var Algebrite = require('algebrite')

print = console.log

print("-----------------------Algebrite-----------------------")

print(Algebrite.run('x + x')) // => "2 x"

print(Algebrite.factor('10!').toString()) // => "2^8 3^4 5^2 7"

print(Algebrite.eval('integral(x)').toString()) // => "1/3 x^3"

print(Algebrite.integral(Algebrite.eval('x')).toString()) // => "1/2 x^2"
