<template>
  
  <li v-for="(item, index) in data" :key="index" :class="item.type">
    <div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.type2 }}</p>
      <p>{{ item.date }}</p>
      <br/>
      <p>{{ item.skill }}</p>
      <br/>
      <p>{{ item.work }}</p>
      <div class="button3">
        <router-link to="/more">상세보기</router-link>
        <a :href="item.url" target="_blank" rel="noopener noreferrer">배포링크</a>
        <a :href="item.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <figure>
      <img :src="item.thumb" />
    </figure>
  </li>
</template>

<script>
import jsonData from '@/assets/data.json';

export default {
  data(){
    return{
      data: jsonData.data
    }
  }
}
console.log(jsonData.data);
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
        align-items: baseline;
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