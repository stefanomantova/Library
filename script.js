let libraryStorage = []
let libraryTableHTML = []
let toggleForm = document.getElementById("addBookForm")
let callFormButton = document.getElementById("callFormButton")

function Book(title, author, pagesQuantity, isRead, readButton, deleteButton){
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
    
    function bookHTML(titleHTML, authorHTML, pagesQuantityHTML, isReadHTML, readButtonHTML, deleteButtonHTML, rowID){
    this.titleHTML = titleHTML
    this.authorHTML = authorHTML
    this.pagesQuantityHTML = pagesQuantityHTML 
    this.isReadHTML = isReadHTML
    this.readButtonHTML = readButtonHTML
    this.deleteButtonHTML = deleteButtonHTML
    this.rowID = rowID

    /*this.readButtonHTML.o = function(){
        if(this.isReadHTML.innerHTML == `Read`){
            this.isReadHTML.innerHTML = `Unread`
        }else{
            this.isReadHTML.innerHTML = `Read`
        } 
    }*/
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
    libraryTableHTML[arrayScan] = new bookHTML()
    let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0]
    libraryTableHTML[arrayScan].rowID = document.createElement('tr')
    libraryTableHTML[arrayScan].titleHTML = document.createElement('td')
    libraryTableHTML[arrayScan].authorHTML = document.createElement('td')
    libraryTableHTML[arrayScan].pagesQuantityHTML = document.createElement('td')
    libraryTableHTML[arrayScan].isReadHTML = document.createElement('td')
    //let newCellActions = document.createElement('td')
    libraryTableHTML[arrayScan].deleteButtonHTML = document.createElement('input')
    libraryTableHTML[arrayScan].deleteButtonHTML.type = 'button'
    libraryTableHTML[arrayScan].deleteButtonHTML.value = 'Delete'
    libraryTableHTML[arrayScan].deleteButtonHTML.id = 'deleteButton'  //tagging delete buttons to correctly identify it later
    libraryTableHTML[arrayScan].deleteButtonHTML.style.backgroundColor = 'red'
    libraryTableHTML[arrayScan].deleteButtonHTML.onclick = function(){deleteBook(arrayScan)}

    libraryTableHTML[arrayScan].readButtonHTML = document.createElement('input')
    libraryTableHTML[arrayScan].readButtonHTML.type = 'button'
    libraryTableHTML[arrayScan].readButtonHTML.value = 'Read/Unread'
    libraryTableHTML[arrayScan].readButtonHTML.id = 'readButton' //tagging read buttons to correctly identify it later
    libraryTableHTML[arrayScan].readButtonHTML.onclick= function() {markAsRead(arrayScan)}
    
    //libraryStorage[arrayScan].readButton = readButton
    //libraryStorage[arrayScan].deleteButton = deleteButton

    libraryTableHTML[arrayScan].titleHTML.innerHTML = `${libraryStorage[arrayScan].title}`
    libraryTableHTML[arrayScan].authorHTML.innerHTML = `${libraryStorage[arrayScan].author}`
    libraryTableHTML[arrayScan].pagesQuantityHTML.innerHTML = `${libraryStorage[arrayScan].pagesQuantity}`
    if(isRead){
    libraryTableHTML[arrayScan].isReadHTML.innerHTML = `Read`
    }else{
        libraryTableHTML[arrayScan].isReadHTML.innerHTML = `Unread`
    }
    
    tableBody.appendChild(libraryTableHTML[arrayScan].rowID)
    libraryTableHTML[arrayScan].rowID.appendChild(libraryTableHTML[arrayScan].titleHTML)
    libraryTableHTML[arrayScan].rowID.appendChild(libraryTableHTML[arrayScan].authorHTML)
    libraryTableHTML[arrayScan].rowID.appendChild(libraryTableHTML[arrayScan].pagesQuantityHTML)
    libraryTableHTML[arrayScan].rowID.appendChild(libraryTableHTML[arrayScan].isReadHTML)
    libraryTableHTML[arrayScan].rowID.appendChild(libraryTableHTML[arrayScan].readButtonHTML)
    libraryTableHTML[arrayScan].rowID.appendChild(libraryTableHTML[arrayScan].deleteButtonHTML)

    }

    function duplicated(title,author,numberOfPages){
        for(let scan = 0; scan < libraryStorage.length ; scan++){
         if(title == libraryStorage[scan].title && author == libraryStorage[scan].author && numberOfPages == libraryStorage[scan].pagesQuantity){
             return true
         }
        }
    }

    function markAsRead(row){
        if(libraryStorage[row].isRead){
            libraryStorage[row].isRead = false
            libraryTableHTML[row].isReadHTML.innerHTML = `Unread`
        }else{
            libraryStorage[row].isRead = true
            libraryTableHTML[row].isReadHTML.innerHTML = `Read`
        }

    }

    function deleteBook(row){
     libraryStorage.splice(row-1,1)
     libraryStorage = libraryStorage.filter(Boolean)
     removeAllChildNodes(libraryTableHTML[row].rowID)
     libraryTableHTML.splice(row-1,1)


    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    



    