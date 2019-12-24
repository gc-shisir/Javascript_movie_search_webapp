let button=document.querySelector('.btn').addEventListener('click',btnSearch);

function btnSearch(e){
    e.preventDefault();
    let searchText=document.querySelector('.form-control').value;

    xhr=new XMLHttpRequest();

    xhr.open('GET',"http://www.omdbapi.com/?apikey=5a189888&s="+searchText,true);

    xhr.onload=function(){
        if(this.status==200){
            let response=JSON.parse(this.responseText);
            console.log(response);
            let output='';
            response.Search.forEach(function(movie){
                output+=`
                    <div class="col-md-3 d-inline-block">
                        <div class="card text-center">
                            <img src="${movie.Poster}" class="card-img-top">
                            <div class="card-body">
                                <h5>${movie.Title}</h5>
                                <a   class="btn btn-primary" onclick="movieSelected('${movie.imdbID}') href="#" >Movie Details</a>
                            </div>
                        </div>
                    </div>
                `
            })
            document.getElementById('movies').innerHTML=output;
        }
    }

    xhr.send();
    // console.log(searchText);

}