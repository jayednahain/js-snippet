console.log("js connected")

const title = document.querySelector('#title_id')
const author = document.querySelector('#author_id')
const year = document.querySelector('#year_id')

const button = document.querySelector('.btn')
const book_list = document.querySelector('#table_row_id')


button.addEventListener('click',function(e){
    e.preventDefault(); 
    console.log("button working");

    if (title.value=="" && author.value=="" && year.value == "")
    {
        alert("Please write somethinbg")
    }
    else{

        //crate rrow
        const row = document.createElement('tr')
        console.log(row);

        // create col
        const col_data_title = document.createElement('th')
        col_data_title.innerHTML = title.value
        row.appendChild(col_data_title)

        const col_data_author = document.createElement('th')
        col_data_author.innerHTML = author.value
        row.appendChild(col_data_author)
        
        const col_data_year = document.createElement('th')
        col_data_year.innerHTML = year.value
        row.appendChild(col_data_year)

        book_list.appendChild(row)


    }

    /*Basic validation 
    if the field is empty alart is popsup
    */
    

})

