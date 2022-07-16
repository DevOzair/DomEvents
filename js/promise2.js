//-------------- NOT WORKING CODE ------------------//
// const getUser = () => {
//     setTimeout(() => {
//       return { name: 'Max' }
//     }, 2000)
//   }
  
//   const user = getUser() // This doesn't actually fetch the user
//                          // return value is void beofre the setTimeout is complete
//   console.log(user.name) // This won't work

//------------------ WORKING CODE WITH CALL BACK------------------//
//   const getUser = cb => {
//     setTimeout(() => {
//       cb({ name: 'Max' })
//     }, 2000)
//   }
  
//   getUser(user => {
//     console.log(user.name) // Prints 'Max' after 2 seconds
//   })


//------------- OLD WAY ------------------//

// function getUser(cb) {
//     setTimeout(() => {
//         cb(2+2) // dont understand what this line is.
//         }, 2000)
// }
    
// //getUser((user) => {console.log(user)}) // Prints 'Max' after 2 seconds
// getUser(LogSomeShit) // Prints 'Max' after 2 seconds


// function LogSomeShit(someshit) {
//     console.log(someshit)
// }


//------------- PROMISE WAY ------------------//

// assign an anonymous funciton that returns a promise
// to a variable called getUser
// resolve is run gets run after arbritrary time (2 seconds)
// getUser = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve({ age: 47})
//         }, 2000)
//     })
// }

// //using the promise that was return from the getUser function
// getUser().then(user => {
//     console.log(user.age)
// })

// console.log('This is run before the promise')


//------------- PROMISE WAY: Notepad  ------------------//
// lets try this raw
// getUser() that will return a promise
// we will handl resolve arbitrarily with a 2 second dealy via a setTimeout()

let getUser = () => {
	// return a promise
	// we will construct it on the spot
	return new Promise(resolve => {
		//set up arbitrariy delay
		setTimeout(() => {
			//hand our resolve in there
			resolve({age: 100})
		}, 2000)
	})
}


//lets use the promise
getUser().then(user => {
	console.log(user.age)
})