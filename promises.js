function requestBook(bookId) {

  const thePromise = new Promise((resolve, reject) => {
    if (typeof bookId !== "number") {
      reject("The id needs to be provided as a number");
      return;
    }

    setTimeout(() => {
      const books = [
        {
          id: 1,
          title: "The Fellowship of the Ring",
          text: "....",
        },
        {
          id: 2,
          title: "The Two Towers",
          text: "....",
        },
        {
          id: 3,
          title: "The Return of the King",
          text: "....",
        },
      ];
      const foundBook = books.find((eachbook) => {
        return eachbook.id === bookId;
      });

      if (!foundBook) {
        reject("There are no books with that id");
        return;
      }

      resolve(foundBook);
    }, Math.random() * 2000 + 1000); // 1s - 3s
  });

  return thePromise

}


// const something = requestBook(1)
// console.log(something)

// how do we process the information after receiving it from the Promise?

// then/catch
// requestBook(2)
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log("ERROR", error)
// })
// .finally(() => {
//   console.log("this runs EVERY TIME, independently from if it rejected or resolved")
// })



// requestBook(10)
// .then((response) => {
//   console.log(response)

//   return requestBook(2) // the system waits until previous promise resolved to launch this one
// })
// .then((response) => {
//   console.log(response)

//   return requestBook(3) // the system waits until previous promise resolved to launch this one
// })
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log("ERROR", error)
// })

// requestBook(2)
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log("ERROR", error)
// })


// requestBook(3)
// .then((response) => {
//   console.log(response)
// })
// .catch((error) => {
//   console.log("ERROR", error)
// })







// Promise.all & Promise.allSettled

// Promise.all([
//   requestBook(1),
//   requestBook(10),
//   requestBook(3)
// ])
// .then((responseArr) => {
//   console.log(responseArr)
// })
// .catch((error) => {
//   console.log(error)
// })


Promise.allSettled([
  requestBook(1),
  requestBook(10),
  requestBook(3)
])
.then((responseArr) => {
  console.log(responseArr)
})
.catch((error) => {
  console.log(error)
})



// async/await