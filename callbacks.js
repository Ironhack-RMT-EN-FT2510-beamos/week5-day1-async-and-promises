console.log("testing")

function requestBook(bookId, callback, errorCallback) {
  // let bookToSend;

  if (typeof bookId !== "number") {
    errorCallback("The id needs to be provided as a number")
    return
  }

  setTimeout(() => {

      const books = [
      {
        id: 1,
        title: "The Fellowship of the Ring",
        text: "...."
      },
      {
        id: 2,
        title: "The Two Towers",
        text: "...."
      },
      {
        id: 3,
        title: "The Return of the King",
        text: "...."
      }
    ]
    const foundBook = books.find((eachbook) => {
      return eachbook.id === bookId
    })

    if (!foundBook) {
      errorCallback("There are no books with that id")
      return
    }

    // bookToSend = foundBook
    callback(foundBook)
  }, (Math.random() * 2000) + 1000) // 1s - 3s
  // return bookToSend
}

// const receivedBook = requestBook(3)
// console.log(receivedBook)

requestBook(1, (data) => {
  console.log(data)
  // everything that should happen when I receive the data

  requestBook(2, (data) => {
    console.log(data)
    // everything that should happen when I receive the data

    requestBook(3, (data) => {
      console.log(data)
      // everything that should happen when I receive the data
    }, (error) => {
      console.log("ERROR", error)
      // everything that should happen if there was an error
    })

  }, (error) => {
    console.log("ERROR", error)
    // everything that should happen if there was an error
  })

}, (error) => {
  console.log("ERROR", error)
  // everything that should happen if there was an error
})



