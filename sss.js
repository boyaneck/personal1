function filterMovies(movieTitle) {

 

    //가져온 api를 lists로 저장 후에(위에서 선언) 이를 filter()를 통해 movieTitle 추출해준다

    filterArr = lists.filter((item) =>

    item.title.toLowerCase().includes(movieTitle)

);

    //필터가 된 후 들어갈 자리를 비워준다.

    document.getElementById("movieInfo").innerHTML = "";

    // forEach를 통해 해당 값들을 돌려주는데 각 항목을 다시 선언해주었다;;

    // 다시 하기 싫어서 다른 방법을 하루종일 찾았는데 어쩔 수 없었다.. 방법을 못 찾았으니;

    filterArr.forEach((data) => {

    let title = data.title;

    let vote_average = data.vote_average;

    let overview = data.overview;

    let poster_path = data.poster_path;

    let id = data.id;

    let img_url = `https://image.tmdb.org/t/p/w300${poster_path}`;



    //html 그 자리에 그대로 넣어준다. 문제 없이 여기서는 잘 보인다.

    //다만 나는 각 요소의 태그값들을 하나하나 겹치지 않게 지정해줬다. 큰 차이는 없는데 찾을 때 조금 더 수월하다.

    let temp_html = ``;

    temp_html = `<div onclick = alert("영화"+"id:"+"${id}")>

                                  <div class ="newImg"><img src = ${img_url} /></div>

                                  <h5>${vote_average}</h5>

                                  <h2>${title}</h2>

                                 <p>${overview}</p>

                          </div>`;

    //비워져있는 movieInfo에 넣어준다.

    document.getElementById("movieInfo").innerHTML += temp_html;

 });

}

    // input 값과 button값을 받아서 변수에 할당

    const searchInput = document.querySelector("#inputBox");

    const searchButton = document.querySelector(".btn-movie");



    // user가 입력한 input값을 받는 btnClick 함수 선언

    // input 값에 들어간 값이 비어있으면 "Please write movie title"

    // 길이가 50자가 넘으면 "your movie title is too long" // 모두 다 통과했다면

    function btnClickDisplay() {

          let movieTitle = searchInput.value.toLowerCase().trim();

          if (movieTitle === "") {

                alert("Please write movie title");

          } else if (movieTitle.length > 50) {

                alert("your movie title is too long");

          } else {



    // filter 사용해서 input값이 들어있는 영화들 추출하는 filterMovies 함수 호출

    filterMovies(movieTitle);

  }

}

         // button 클릭 시 이벤트 btnClick 함수 호출

          searchButton.addEventListener("click", btnClickDisplay);

