<template>
  <li class="web">
    <div>
      <h3>#1 해양생물연구센터</h3>
      <p>팀 프로젝트 - 반응형 리뉴얼 웹</p>
      <p>2024.07 - 2024.08 (약 1달)</p>
      <br/>
      <p>HTML5 · CSS / SCSS · JavaScript · jQuery · JSON</p>
      <br/>
      <p>기획, 상세페이지 제작</p>
      <div class="button3">
        <router-link to="/more">상세보기</router-link>
        <router-link to="/">배포링크</router-link>
        <router-link to="/">GitHub</router-link>
      </div>
    </div>
    <figure>
      <img src="../assets/img/거북.png"/>
    </figure>
  </li>

  <li class="mobile">
    <div>
      <h3>#4 SEOUL,W</h3>
      <p>서울시 공연 정보 앱 (PWA)</p>
      <p>2024.09.30 ~ 2024.10.17 (18일)</p>
      <br/>
      <p>Next.js · NextAuth.js · Vercel · Github · Zustand</p>
      <!-- <p>Next.js / NextAuth.js / Vercel / Postman / Github / Zustand / Material UI / SASS / PWA / Swiper / Axios / xml-js / SweetAlert2</p> -->
      <!-- <p>Next.js NextAuth.js Vercel Postman Github Zustand Material UI SASS PWA Swiper Axios xml-js SweetAlert2</p> -->
      <br/>
      <p>API 관리, Category page, Search Page 담당</p>
      <p>기능: 무한스크롤, 검색 쿠키 저장 및 삭제, 검색</p>
      <div class="button3">
        <router-link to="/more">상세보기</router-link>
        <router-link to="/">배포링크</router-link>
        <router-link to="/">GitHub</router-link>
      </div>
    </div>
    <figure>
      <img src="../assets/img/eg1.svg"/>
    </figure>
  </li>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  li{
    font-family: 'Inter';
    div{
      width: 500px;
      text-align: left;
      h3{
        font-size: 48px;
        font-weight: 500;
        color: white;
        text-shadow: 
          -1px -1px 0 black,  
          1px -1px 0 black,
          -1px  1px 0 black,
          1px  1px 0 black;
        margin-bottom: 30px;
      }
      p{
        font-size: 20px;
        font-weight: 300;
      }
      .button3{
        display: flex;
        gap: 30px;
        align-items: center;
        margin-bottom: 20px;
        a{
          font-size: 18px;
          font-weight: bold;
          color: black;
          &:hover{
            color: slateblue;
          }
        }
      }
      >a{
        display: inline-block;
        margin-top: 30px;
        font-size: 28px;
        text-decoration: none;
        // color: rgb(141, 141, 141);
        color: white;
        // background-color: rgb(0, 0, 0);
        img{
          margin-left: -5px;
          width: 40px;
          height: 40px;
          opacity: 0.8;
        }
      }
    }
    figure{
      img{
        width: 100%;
        border-radius: 10px;
        box-shadow: 30px 30px 15px 5px rgba(0, 0, 0, 0.25);
        border: 1px solid black;
      }
    }
  }

  .web {

  }
  .mobile{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 20px 0;
    height: 100vh;

    figure{
      img{
        width: 420px;
      }      
    }
  }
</style>