let libraryStorage = []
let toggleForm = document.getElementById("addBookForm")
let callFormButton = document.getElementById("callFormButton")

function Book(title, author, pagesQuantity, isRead, readButton, deleteButton,titleHTML, authorHTML, pagesQuantityHTML, isReadHTML, readButtonHTML, deleteButtonHTML, rowID){
    this.title = title
    this.author = author
    this.pagesQuantity = pagesQuantity
    this.isRead = isRead
    this.readButton = readButton
    this.deleteButton = deleteButton
    this.titleHTML = titleHTML
    this.authorHTML = authorHTML
    this.pagesQuantityHTML = pagesQuantityHTML 
    this.isReadHTML = isReadHTML
    this.readButtonHTML = readButtonHTML
    this.deleteButtonHTML = deleteButtonHTML
    this.rowID = rowID
    }
     
    function showForm(){
        toggleForm = document.getElementById("addBookForm")
        if (toggleForm.style.display != "block") {
            toggleForm.style.display = "block"
            callFormButton.setAttribute('value','Save and Close')
            
        } else {
            toggleForm.style.display = "none"
            if(document.forms[0].elements[0].value==""||document.forms[0].elements[1].value =="" || document.forms[0].elements[2].value == ""|| Number(document.forms[0].elements[2].value) <1){
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
    libraryStorage[arrayScan].rowID = document.createElement('tr')
    libraryStorage[arrayScan].titleHTML = document.createElement('td')
    libraryStorage[arrayScan].authorHTML = document.createElement('td')
    libraryStorage[arrayScan].pagesQuantityHTML = document.createElement('td')
    libraryStorage[arrayScan].isReadHTML = document.createElement('td')
    libraryStorage[arrayScan].deleteButtonHTML = document.createElement('input')
    libraryStorage[arrayScan].deleteButtonHTML.type = 'button'
    libraryStorage[arrayScan].deleteButtonHTML.value = 'Delete'
    libraryStorage[arrayScan].deleteButtonHTML.id = 'deleteButton' 
    libraryStorage[arrayScan].deleteButtonHTML.style.backgroundColor = 'red'
    libraryStorage[arrayScan].deleteButtonHTML.addEventListener('click', function(){ deleteBook(event,arrayScan)}) 

    libraryStorage[arrayScan].readButtonHTML = document.createElement('input')
    libraryStorage[arrayScan].readButtonHTML.type = 'button'
    libraryStorage[arrayScan].readButtonHTML.value = 'Read/Unread'
    libraryStorage[arrayScan].readButtonHTML.id = 'readButton' 
    libraryStorage[arrayScan].readButtonHTML.addEventListener('click',function() {markAsRead(event)})
    
    libraryStorage[arrayScan].titleHTML.innerHTML = `${libraryStorage[arrayScan].title}`
    libraryStorage[arrayScan].authorHTML.innerHTML = `${libraryStorage[arrayScan].author}`
    libraryStorage[arrayScan].pagesQuantityHTML.innerHTML = `${libraryStorage[arrayScan].pagesQuantity}`
    if(isRead){
    libraryStorage[arrayScan].isReadHTML.innerHTML = `Read`
    }else{
        libraryStorage[arrayScan].isReadHTML.innerHTML = `Unread`
    }
    
    tableBody.appendChild(libraryStorage[arrayScan].rowID)
    libraryStorage[arrayScan].rowID.appendChild(libraryStorage[arrayScan].titleHTML)
    libraryStorage[arrayScan].rowID.appendChild(libraryStorage[arrayScan].authorHTML)
    libraryStorage[arrayScan].rowID.appendChild(libraryStorage[arrayScan].pagesQuantityHTML)
    libraryStorage[arrayScan].rowID.appendChild(libraryStorage[arrayScan].isReadHTML)
    libraryStorage[arrayScan].rowID.appendChild(libraryStorage[arrayScan].readButtonHTML)
    libraryStorage[arrayScan].rowID.appendChild(libraryStorage[arrayScan].deleteButtonHTML)

    }

    function duplicated(title,author,numberOfPages){
        for(let scan = 0; scan < libraryStorage.length ; scan++){
         if(title == libraryStorage[scan].title && author == libraryStorage[scan].author && numberOfPages == libraryStorage[scan].pagesQuantity){
             return true
         }
        }
    }

    function deleteBook(event,row){
    let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0]
    {tableBody.removeChild(event.target.parentElement)}
     libraryStorage.splice(row,1)

    }

    function markAsRead(event){
        if(event.target.parentElement.childNodes[3].innerHTML==`Unread`){
        event.target.parentElement.childNodes[3].innerHTML = `Read`
        }else{
            event.target.parentElement.childNodes[3].innerHTML = `Unread`

        }
   
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    



    