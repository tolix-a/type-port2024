<template>
  <li class="list">
    <div class="info">
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
      <br/>
      <router-link to="/more">more</router-link>
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
  .list{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 20px 0;

    font-family: 'Inter';

    .info{
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
        font-size: 22px;
        font-weight: 400;
      }
    }
    figure{
      img{
        border-radius: 10px;
        box-shadow: 30px 30px 15px 5px rgba(0, 0, 0, 0.25);
        border: 1px solid black;
      }
    }
  }
</style>