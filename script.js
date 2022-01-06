let libraryStorage = []
//let libraryStorage = []
let toggleForm = document.getElementById("addBookForm")
let callFormButton = document.getElementById("callFormButton")
let tr = document.createElement('tr')
let count = 0

function Book(title, author, pagesQuantity, isRead, readButton, deleteButton,titleHTML, authorHTML, pagesQuantityHTML, isReadHTML, readButtonHTML, deleteButtonHTML){
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
    this.titleHTML = titleHTML
    this.authorHTML = authorHTML
    this.pagesQuantityHTML = pagesQuantityHTML 
    this.isReadHTML = isReadHTML
    this.readButtonHTML = readButtonHTML
    this.deleteButtonHTML = deleteButtonHTML
    

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
    //libraryStorage[arrayScan] = new bookHTML()
    let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0]
    libraryStorage[arrayScan].currentRow = document.createElement('tr')
    libraryStorage[arrayScan].currentRow.id = 'currentRow'
    libraryStorage[arrayScan].titleHTML = document.createElement('td')
    libraryStorage[arrayScan].authorHTML = document.createElement('td')
    libraryStorage[arrayScan].pagesQuantityHTML = document.createElement('td')
    libraryStorage[arrayScan].isReadHTML = document.createElement('td')
    libraryStorage[arrayScan].deleteButtonHTML = document.createElement('input')
    libraryStorage[arrayScan].deleteButtonHTML.type = 'button'
    libraryStorage[arrayScan].deleteButtonHTML.value = `${title} Delete`
    libraryStorage[arrayScan].deleteButtonHTML.class = 'deleteButton'
    libraryStorage[arrayScan].deleteButtonHTML.id = 'deleteButton' //tagging delete buttons to correctly identify it later
    libraryStorage[arrayScan].deleteButtonHTML.style.backgroundColor = 'red'
    //libraryStorage[arrayScan].deleteButtonHTML.setAttribute('data',)
   // libraryStorage[arrayScan].deleteButtonHTML.onclick = function(){deleteBook(libraryStorage[arrayScan].currentRow)}
  // document.getElementById('deleteButton').onclick = function(){deleteBook(libraryStorage[arrayScan].currentRow)}
    libraryStorage[arrayScan].readButtonHTML = document.createElement('input')
    libraryStorage[arrayScan].readButtonHTML.type = 'button'
    libraryStorage[arrayScan].readButtonHTML.value = 'Read/Unread'
    libraryStorage[arrayScan].readButtonHTML.id = 'readButton' //tagging read buttons to correctly identify it later
    libraryStorage[arrayScan].readButtonHTML.onclick= function() {markAsRead(arrayScan)}
    libraryStorage[arrayScan].titleHTML.innerHTML = `${libraryStorage[arrayScan].title}`
    libraryStorage[arrayScan].authorHTML.innerHTML = `${libraryStorage[arrayScan].author}`
    libraryStorage[arrayScan].pagesQuantityHTML.innerHTML = `${libraryStorage[arrayScan].pagesQuantity}`
    if(isRead){
    libraryStorage[arrayScan].isReadHTML.innerHTML = `Read`
    }else{
        libraryStorage[arrayScan].isReadHTML.innerHTML = `Unread`
    }
    
    tableBody.appendChild(libraryStorage[arrayScan].currentRow)
    libraryStorage[arrayScan].currentRow.appendChild(libraryStorage[arrayScan].titleHTML)
    libraryStorage[arrayScan].currentRow.appendChild(libraryStorage[arrayScan].authorHTML)
    libraryStorage[arrayScan].currentRow.appendChild(libraryStorage[arrayScan].pagesQuantityHTML)
    libraryStorage[arrayScan].currentRow.appendChild(libraryStorage[arrayScan].isReadHTML)
    libraryStorage[arrayScan].currentRow.appendChild(libraryStorage[arrayScan].readButtonHTML)
    libraryStorage[arrayScan].currentRow.appendChild(libraryStorage[arrayScan].deleteButtonHTML)
    triggerButtons()
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
            libraryStorage[row].isReadHTML.innerHTML = `Unread`
        }else{
            libraryStorage[row].isRead = true
            libraryStorage[row].isReadHTML.innerHTML = `Read`
        }

    }

   function triggerButtons(){
        let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0]
        for(let i = 0; i< libraryStorage.length; i++){
            document.getElementsByClassName('deleteButton')[i].onclick = function(){deleteBook(libraryStorage[i].currentRow)}
        }
    }

    function deleteBook(row){
    let tableBody = document.getElementById('table').getElementsByTagName('tbody')[0]
     libraryStorage.splice(row,1)
     document.getElementById('table').getElementsByTagName('tbody')[0].deleteRow(tableBody, row)

    }

    function reIndex(removedElement){
        for(let i = removedElement; i < libraryStorage.length-1 ; i++){
            libraryStorage[i] = libraryStorage[i+1]
        }
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    



    