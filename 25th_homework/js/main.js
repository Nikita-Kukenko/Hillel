let promise = new Promise((resolve, reject) => {
  console.log(0);

  if(true) {
    resolve('true')
  } else {
    reject('false')
  }

})

promise.then(
  (result) => {
    console.log(1);
    return Promise.resolve(result);
  },
  (result) => {
    console.log(2);
    return Promise.resolve(result);
  }
)

.then(
  (result) => {
    console.log(3);
    return Promise.reject(result);
  },
  () => {
    console.log(4);
  }
)

.then(
  () => {
    console.log(5);
  },
  (result) => {
    console.log(6);
    if(result == 'false') {
      return Promise.resolve(result);
    } else {
      return Promise.reject(result);
    }
  }
)

.then(
  () => {
    console.log(7);
    return Promise.resolve();
  },
  () => {
    console.log(8);
    return Promise.resolve();
  }
)

.then(
  () => {
    console.log(9);
    return Promise.reject();
  },
  () => {
    console.log(10);
   }
)

.then(
  () => {
    console.log(11);
   },
  () => {
    console.log(12);
   }
)
