let libraryStorage = []
let libraryTableHTML = []
let toggleForm = document.getElementById("addBookForm")
let callFormButton = document.getElementById("callFormButton")

function Book(title, author, pagesQuantity, isRead){
    this.title = title
    this.author = author
    this.pagesQuantity = pagesQuantity
    this.isRead = isRead
    this.readButton = readButton
    this.deleteButton = deleteButton
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

    function showForm(){
        toggleForm = document.getElementById("addBookForm")
        if (toggleForm.style.display != "block") {
            toggleForm.style.display = "block"
            callFormButton.setAttribute('value','Save and Close')
            
        } else {
            toggleForm.style.display = "none"
            if(document.forms[0].elements[0].value==""||document.forms[0].elements[1].value =="" || document.forms[0].elements[2].value == ""){
                alert("Invalid book!")
            }else if(duplicated(document.forms[0].elements[0].value, document.forms[0].elements[1].value, document.forms[0].elements[2].value)){
                alert("Book already registered!")
            }else{
            addBookToList()
            }
            callFormButton.setAttribute('value','Add a new Book')
        
    }

    }
      
    
    function addBookToList(){
      
        let arrayScan = 0
     while(libraryStorage[arrayScan]!=undefined){
        arrayScan++
    }
    let title = document.forms[0].elements[0].value
    let author = document.forms[0].elements[1].value
    let pages = document.forms[0].elements[2].value
    let isRead = document.forms[0].elements[3].checked
    libraryStorage[arrayScan] = new Book(title, author, pages, isRead)
    let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0]
    let newRow = document.createElement('tr')
    let newCellTitle = document.createElement('td')
    let newCellAuthor = document.createElement('td')
    let newCellPages = document.createElement('td')
    let newCellIsRead = document.createElement('td')
    //let newCellActions = document.createElement('td')
    let deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.id = 'deleteButton'  //tagging delete buttons to correctly identify it later
    deleteButton.style.backgroundColor = 'red'

    let readButton = document.createElement('input')
    readButton.type = 'button'
    readButton.value = 'Read/Unread'
    readButton.id = 'readButton' //tagging read buttons to correctly identify it later
    
    libraryStorage[arrayScan].readButton = readButton
    libraryStorage[arrayScan].deleteButton = deleteButton

    newCellTitle.innerHTML = `${libraryStorage[arrayScan].title}`
    newCellAuthor.innerHTML = `${libraryStorage[arrayScan].author}`
    newCellPages.innerHTML = `${libraryStorage[arrayScan].pagesQuantity}`
    if(isRead){
    newCellIsRead.innerHTML = `Read`
    }else{
    newCellIsRead.innerHTML = `Unread`
    }
    
    tableBody.appendChild(newRow)
    newRow.appendChild(newCellTitle)
    newRow.appendChild(newCellAuthor)
    newRow.appendChild(newCellPages)
    newRow.appendChild(newCellIsRead)
    newRow.appendChild(readButton)
    newRow.appendChild(deleteButton)

    }

    function duplicated(title,author,numberOfPages){
        for(let scan = 0; scan < libraryStorage.length ; scan++){
         if(title == libraryStorage[scan].title && author == libraryStorage[scan].author && numberOfPages == libraryStorage[scan].pagesQuantity){
             return true
         }
        }
    }

    Book.prototype.delete = function(){
      
    }

    /*Book.prototype.markAsRead = function(){
        document.getElementById('readButton').onclick(){

        }
        
    }*/