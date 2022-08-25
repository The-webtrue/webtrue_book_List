const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click',  (e)=>{
    e.preventDefault();

    if ( title.value == '' && author.value == '' && year.value == '' )
    {
        alert("Add Your Data")
    }
    else
    {
        const newTrow = document.createElement('tr');
        
        bookList.appendChild(newTrow);

        // creating new titel
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newTrow.appendChild(newTitle);  

        // creating new Autor
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newTrow.appendChild(newAuthor);  

        // creating new Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newTrow.appendChild(newYear);  
    }


});

