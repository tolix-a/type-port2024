<template>
  <div class="box2"></div>

  <button class="btn prev" @click="prevContent">#2</button>
  <button class="btn next" @click="nextContent">#4</button>

  <div class="detailPage">  
    <div class="all">
      <!-- <router-link to="/">back to Home</router-link> -->
      <div class="one">
        <div>
          <div class="title">
            <h1>#{{ item.id }}</h1>
            <h2>{{item.title}}</h2>
          </div>
          <section>
            <div>
              <p>{{item.type2}}</p>
              <p>{{item.date}}</p>
              <p>{{item.skill}}</p>
            </div>
            <div>
              <p>{{item.work}}</p>
              <p>{{item.function}}</p>
              <p>{{item.etc}}</p>
              <br/>
            </div>
          </section>
        </div>
      </div>

      <div class="two">
        <article>
          <div v-for="(content, index) in item.contents" :key="index">
            <h3 >{{content.h3}}</h3>
            <p v-for="(pa, pIndex) in content.p" :key="pIndex">{{ pa }}</p>
            <p>한화에서 운영하는 다른 해양생물 사이트인 아쿠아플라넷 공식 사이트를 참고하여 리뉴얼 디자인을 진행</p>
            <p>일반 사용자가 사용하기에 가독성을 더 높이고, 반응형으로 제작하여 모바일에서도 편하게 방문 할 수 있도록 개선</p>

            <h3>트러블슈팅</h3>
            <p>x 버튼을 누르면 하나만 삭제되어야 하는데 쿠키가 어쩔땐 1개, 어쩔땐 전부 지워짐</p>
          </div>
          
        </article>
        <!-- 이미지 없으면 에러남 -->
        <figure :class="item.type">
          <img v-for="(image,index) in item.img" :key="index" :src="require(`@/assets/img/${image}`)"/>
        </figure>
        <h5>
          <a :href="item.git" target="_blank" rel="noopener noreferrer">VIEW GITHUB</a>
        </h5>
      </div>
      
    </div>
  </div>
  <TopButton/>
</template>

<script>
import TopButton from '@/components/TopButton.vue';
import jsonData from '@/assets/data.json';

export default {
  data() {
    return {
      item: {},
      data: jsonData.data
    };
  },
  components:{
    TopButton
  },
  computed: {

  },
  methods: {
    loadData() {
      const id = this.$route.params.id;
      this.item = this.data.find(item => item.id === id);
    }
  },
  mounted() {
    this.loadData()
    console.log(this.item.date)

    window.scrollTo(0, 0);
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Zilla+Slab+Highlight:wght@400;700&display=swap');
  
  .box2{
    border: 1px solid black;
    // border-top: 1px solid black;
    // border-bottom: 1px solid black;
    background-color: transparent;
    pointer-events: none;

    position: fixed; 
    transform: translate(-50%, -50%);
    z-index: 1;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
  }

  .btn{
    display:inline-block;
    padding: 0 20px;
    background-color: transparent;
    cursor: pointer;
    height: 90%;
    margin: auto 0;
    font-size: 20px;
    // color: rgba(255, 255, 255, 0.7);
    color: black;
    border: none;
    position: fixed;
    top: 5%;
    &.prev{
      left: 1%;
    }
    &.next{
      right: 1%;
    }
  }

  .detailPage{
    display: flex;
    width: 100%;
    height: 100vh;
    text-align: left;
    background-color: yellowgreen;
    // background-image: url(../assets/img/ciaran-o-brien-unsplash.jpg);
    background-size: cover;
    background-position: center;

    // position: fixed;
    justify-content: center;
    // &::before {
    //     content: "";
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: rgba(0, 0, 0, 0.5);
    //     mix-blend-mode: multiply;
    //     z-index: 1;
    //   }
    //   .one {
    //     position: relative;
    //     z-index: 2;
    //     color: white;
    //     // color: black;
    //   }
      
  }

  .all{
    max-width: 1440px;
    
    // overflow-y: scroll;
    // -ms-overflow-style: none;
    // scrollbar-width: none;
    // &::-webkit-scrollbar {
    //   display: none;
    // }

    >a{
      text-decoration: none;
      color: black;
    }

    .one{
      height: 100vh;
      // position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      >div{
        // position: absolute;
        max-width: 60%;
        .title{
          font-family: "Inter";
          h1{
            font-size: 156px;
            line-height: 1;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.7);
          }
          h2{
            font-size: 156px;
            font-weight: bold;
            line-height: 1.1;
            overflow-wrap: break-word
          }
        }
        >section{
          // width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 50px;
          // font-size: 18px;
          font-weight: 400;
          font-family: "Aleo";
          border-top: 1px solid black;
          margin-top: 2px;
          padding-top: 20px;
          p{
            &:nth-of-type(2){
              padding: 10px 0;
            }
          }
        }
      }
    }
    >.two{
      max-width: 1440px;
      min-height: 100vh;
      padding-top: 50px;
      h5{
        padding: 400px 0;
        text-align: center;
        font-size: 40px;
        font-family: "Zilla Slab Highlight", serif;
        font-weight: 400;

        a{
          text-decoration: underline;
          // color: white;
          color: black;
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
            border: 1px solid black;
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
            border: 1px solid black;
          }
        }
      }
    }
  }

  .top{
    // position: absolute;
    bottom: 8%;
    right: 5%;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 15;
    transition: opacity 0.3s ease-in-out;
  }
</style>