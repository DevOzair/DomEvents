let p = new Promise((resolve, reject) => {
    //define what the actual promise is here
    //note: a promise is usually an action that will
    //      take some time to complete and will be running in the background.
    let a = 1+2
    
    //test the promise
    if (a === 2) 
    {
      //resolve
      // we can pass anything we want in
      //this is being passed from the .then & .catch functions
      //SO the parabeters have to match 
      //the .then function is the one that is called when the promise is resolved
      resolve("hello") 
    } 
    else 
    {
      //reject
      //same as resolve rules but run when the promise fails
      reject("Bye") // same, pass what ever
    }
  })
  
  
  //lets use the promise
  //if promise was successful .then() will run
  //if promise failed .catch() will run
  //.then() & .fail() takes a function as a parameter
      //these fucntion will in the the form 
      //(param) => {}
      //param gets passed **FROM**:
          //resolved method for .then
          //reject method for .catch
  p.then((param) => {
    //code here is run when successful
    console.log(param + " " + p)
  }).catch((param) => {
    //code here is run when unsuccessful
    console.log(param + " " + p)
  })
  