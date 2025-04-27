//arrow function
const msg = ()=>{return console.log("Hello.JS")}
//console.log(msg)
msg()

//write an arrow function to sum 2 numbers
const add = (a, b)=> {return a + b}
console.log(add(4, 5))

//Default parameter
const mult = (a, b = 2)=>{return a * b}
console.log(mult(4, 5))
console.log(mult(4))

//Rest parameter
const mysum = (...n)=>{
	console.log(n)
	
	let sum = 0
	n.forEach((i) =>
	{
	sum += i
	})
	console.log(sum)
	
	
}
mysum(4, 5, 6, 89, 2)

//reduce method
const mysums = (...n)=>{
	return n.reduce((t, i)=>t=t+i)
}
console.log(mysums(4, 5, 6, 8, 2))

//callback function
//a function passed as an argument

const greet = (msg, fun)=>{
	
	console.log("Hi.."+msg)
	fun()
}
//const myName = (name)=>{console.log("My name is "+name)} 
greet("Good morning", ()=>{console.log("My name is David")})