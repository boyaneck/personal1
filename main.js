

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGM4ZDRmN2VmYjZjOGJhOThmZTZiMzQ2N2YzNzk1YyIsInN1YiI6IjY1MmY1NDk1MzU4ZGE3NWI2MWY5Y2I2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gklymgfGe7dK275X0yVEaiH-XFq6c2vDBFyK0Ef7vus'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1', options)
  .then(response => response.json())
  .then(response => {
    let res = response;
    console.log(response)
    for (let i = 0; i < res.results.length; i++) {
      let list = res.results[i];
      let title = list.title;
      let average = list.vote_average;
      let view = list.overview;
      let id = list.id;
      let div = document.createElement('div');


      let temp = `<div onclick=alert(${id})>
      <img src="https://image.tmdb.org/t/p/w400${list.backdrop_path}" alt="none"></img>
      <h5>${average}</h5>
      <h2>${title}</h2>
      <p>${view}</p>  
      </div>`;
      document.querySelector('.section').innerHTML += temp;

    //영화 클릭시 경고창
     div.addEventListener('click', () => {
        alert(`Id of this movie is ${id}`);
      })
      }

    //filter 를 통해 검색된 영화만 추출
      let filterMovie = (searchWord) => {
      let filterArr = res.results.filter((e) => {
        console.log(e.title.toLowerCase().includes(searchWord))
        if (e.title.toLowerCase().includes(searchWord)) {
          return e.title.toLowerCase();
        }
        //검색어를 포함한 제목들만 배열로 추출
       });

      document.querySelector('.section').innerHTML = '';
      //현재 들어가 있는 section을 초기화


      filterArr.forEach(result => {
        let title = result.title;
        let average = result.vote_average;
        let overview = result.overview;
        let imgPath = result.backdrop_path;
        let id = result.id;
        let img_url = `https://image.tmdb.org/t/p/w400${imgPath}`;

        let temp_html = ``;
        search_html = `<div onclick = alert("영화"+"id:"+"${id}")>
        <div class ="newImg"><img src ="${img_url}" alt="none" /></div>
        <h5>${average}</h5>
        <h2>${title}</h2>
         <p>${overview}</p>
       </div>`;
        document.querySelector('.section').innerHTML += search_html;
        //이미지,제목,뷰,넣기 
      });
    }

    //버튼이 눌렸을 때 값 가져오기
    const searchInput = document.querySelector('#search');
    const searchButton = document.querySelector('#search-btn');

   

    let onclickBtn = () => {
      let searchWord = searchInput.value;
      filterMovie(searchWord);
      //검색어에 해당되는 제목만 가져오는 메소드 실행

    }

    
   enter1=()=>{
      if (window.event.keyCode == 13) {
        let val = document.getElementById('search').value;
        console.log('엔터키', val)
       filterMovie(val);
    

      }
    }


    //검색 버튼 클릭시 함수 실행
    searchButton.addEventListener('click', onclickBtn); })
  .catch(err => console.error(err));

  const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGM4ZDRmN2VmYjZjOGJhOThmZTZiMzQ2N2YzNzk1YyIsInN1YiI6IjY1MmY1NDk1MzU4ZGE3NWI2MWY5Y2I2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gklymgfGe7dK275X0yVEaiH-XFq6c2vDBFyK0Ef7vus'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
    .then(response => response.json())
    .then(response =>{
      
    
     let res2=response;
      console.log(res2)
      // for(let i=-4; i<5; i++){
       
      //   console.log(i)
      //   let ran=i+4;
      //   let list2 = res2.results[ran];
      //   console.log(list2.title)
      //   let title2=list2.title;
       
      //   let cardsection =`<div class="card" style="--i:-${i};">${i} <img src="https://image.tmdb.org/t/p/w400${list2.backdrop_path}"style="width:100%; alt="none"></img></div>`;
        let doc2=document.createElement('div');
        doc2.innerHTML=`<div class="card" style="--i:-${i};">${i} <img src="https://image.tmdb.org/t/p/w400${list2.backdrop_path}"style="width:100%; alt="none"></img></div>`;

        document.querySelector('.container-card').append(doc2);

      //   console.log('에헤라')

      // }
     
    
      

    }).catch(err => console.error(err));

