function Book(title, author, pagesQuantity, isRead){
    this.title = title
    this.author = author
    this.pagesQuantity = pagesQuantity
    this.isRead = isRead
    this.info = function (){
        let info
        if(isRead){
        info = (title+" by "+author+", "+pagesQuantity+" pages, already read")
        }else{
        info = (title+" by "+author+", "+pagesQuantity+" pages, not read yet")
        }
        return info
    }
    
    }
    
    
    let b1 = new Book("Harry Potter", "J.K Rowling", 350, true) 
    function test(){
    alert(b1.info())
    }

    function createForm(){
    let addBookDiv = document.getElementById('addBook')
    addBookDiv.removeChild(document.getElementById('callFormButton'))
    let newBookForm = document.createElement('form')
    addBookDiv.appendChild(newBookForm)
    let bookName = document.createElement('input')
    bookName.type = 'text'
    newBookForm.innerHTML = `Book Name `
    newBookForm.appendChild(bookName)
    let bookAuthor = document.createElement('input')
    bookAuthor.type = 'text'
    newBookForm.innerHTML += '</br> Author '
    newBookForm.appendChild(bookAuthor)
    let numberPages = document.createElement('input')
    numberPages.type = 'number'
    newBookForm.innerHTML += '</br> Number of pages '
    newBookForm.appendChild(numberPages)
    let readCheck = document.createElement('input')
    readCheck.type = 'checkbox'
    newBookForm.innerHTML += '</br> Already read? '
    newBookForm.appendChild(readCheck)
    let addBookButton = document.createElement('input')
    addBookButton.type = 'button'
    addBookButton.value = 'Add Book'
    let br = document.createElement("br")
    newBookForm.appendChild(br)
    newBookForm.appendChild(addBookButton)
    

    }