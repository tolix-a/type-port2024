<template>
  <div class="box box2">
  </div>

  <div class="detailPage">
    <button class="prev">#2</button>
    
        <!-- <router-link to="/">back to Home</router-link> -->
      <div class="wrapper">
        <div class="one">
          <div>
            <div class="title">
              <h1>#3</h1>
              <h2>SEOUL,W</h2>
            </div>
            <section>
              <div>
                <p>팀 프로젝트 (4인) - 모바일 앱 PWA</p>
                <p>2024.09.30 ~ 2024.10.17 (18일)</p>
                <p>Next.js NextAuth.js Vercel Postman Github Zustand Material UI SASS PWA Swiper Axios xml-js SweetAlert2</p>
              </div>
              <div>
                <p>담당: API 관리, Category page, Search Page</p>
                <p>기능: 무한스크롤, 검색 쿠키 저장 및 삭제, 검색</p>
                <p>기타: KOPIS API 사용</p>
                <br/>
              </div>
            </section>
          </div>
        </div>
        <div class="two">
          <article>
            <h3>리뉴얼 사이트 선정 이유 및 개선사항</h3>
            <p>한화에서 운영하는 해양생물 관련 사이트 중 가장 관심도가 낮은 사이트로 사용자가 적은 만큼 오래된 상태로 방치되어 노후화, 오래된 디자인이 고착되어있다는 점을 토대로 리뉴얼을 결정</p>
            <p>한화에서 운영하는 다른 해양생물 사이트인 아쿠아플라넷 공식 사이트를 참고하여 리뉴얼 디자인을 진행</p>
            <p>일반 사용자가 사용하기에 가독성을 더 높이고, 반응형으로 제작하여 모바일에서도 편하게 방문 할 수 있도록 개선</p>
            <h3>트러블슈팅</h3>
            <p>x 버튼을 누르면 하나만 삭제되어야 하는데 쿠키가 어쩔땐 1개, 어쩔땐 전부 지워짐</p>
            <p>한화에서 운영하는 다른 해양생물 사이트인 아쿠아플라넷 공식 사이트를 참고하여 리뉴얼 디자인을 진행</p>
            <p>일반 사용자가 사용하기에 가독성을 더 높이고, 반응형으로 제작하여 모바일에서도 편하게 방문 할 수 있도록 개선</p>
          </article>
        </div>
        <div class="three">
          <figure class="mobile">
            <img src="../assets/img/3-1.svg"/>
            <img src="../assets/img/3-2.svg"/>
            <img src="../assets/img/3-3.svg"/>
          </figure>
          <figure class="web">
          </figure>
        </div>
        <div class="four">
          <h5>
            <a href="https://" target="_blank" rel="noopener noreferrer">VIEW GITHUB</a>
          </h5>
        </div>
      </div>
    
    <button class="next">#4</button>
    
  </div>
</template>
<script>

export default {
  components:{
    
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Zilla+Slab+Highlight:wght@400;700&display=swap');
  
  .detailPage{
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    
    // background-image: url(../assets/img/ciaran-o-brien-unsplash.jpg);
    background-size: cover;
    background-position: center;
    
    // display: flex;
    // flex-direction: row;
    // text-align: left;
    // justify-content: space-between;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        mix-blend-mode: multiply;
        z-index: 1;
      }
      > * {
        position: relative;
        z-index: 2;
        color: white;
      }
      button{
        display:inline-block;
        padding: 0 20px;
        background-color: transparent;
        cursor: pointer;
        height: 5%;
        width: 90%;
        margin: 25px 0;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.7);
        // border: none;

        &.prev{
          // left: 1%;
        }
        &.next{
          // right: 1%;
        }
      }
  }

  .wrapper{
    display: flex;
    flex-direction: row;
    // width: 800vw;
    // display: inline-block;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
    // white-space: nowrap;

    .one{
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      position: relative;
      
      display: flex;
      >div{
        position: absolute;
        max-width: 50%;
        // right: 0%;
        // bottom: 10%;
        .title{
          h1{
            font-size: 156px;
            line-height: 1;
          }
          h2{
            font-size: 156px;
            line-height: 1.1;
          }
        }
        >section{
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 50px;
          // font-size: 18px;
          font-weight: 400;
          font-family: "Aleo";
          p{
            &:nth-of-type(2){
              padding: 10px 0;
            }
          }
        }
      }
    }
    .two{
      width: 100vw;
      height: 100vh;
      // padding-top: 100px;
      h5{
        padding: 400px 0;
        text-align: center;
        font-size: 40px;
        font-family: "Zilla Slab Highlight", serif;
        font-weight: 400;

        a{
          text-decoration: underline;
          color: white;
        }
      }
      article{
        font-family: "Aleo";
        h3{
          padding: 80px 0 20px 0;
          font-size: 28px;
          font-weight: 500;
        }
        p{
          padding: 3px 0;
          font-size: 18px;
          font-weight: 300;
        }
      }
    }
    .three{
      width: 100vw;
      height: 100vh;
      figure{
        padding-top: 100px;
        &.mobile{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          >img{
            height: 600px;
            object-fit: cover;
            border-radius: 10px;
          }
        }
        &.web{
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          img{
            width: 100%;
            height: 430px;
            object-fit: cover;
            border-radius: 10px;
          }
        }
      }
    }
    .four{
      width: 100vw;
      height: 100vh;
    }
  }

</style>