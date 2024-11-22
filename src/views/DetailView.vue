<template>
  <div class="box2"></div>
  <div class="blur b1"></div>
  <div class="blur b2"></div>
  <div class="blur b3"></div>
  <div class="blur b4"></div>

  <router-link :to="`/more/${currentId - 1}`" v-if="currentId > 1" class="btn prev">
    <img src="../assets/icon/double-left-50.svg"/> #{{ currentId - 1 }}
  </router-link>
  <router-link :to="`/more/${currentId + 1}`" v-if="currentId < lastNum" class="btn next">
    #{{ currentId + 1 }} <img src="../assets/icon/double-right-50.svg"/>
  </router-link>
  <!-- <button class="btn prev" @click="nextContent">#2</button>
    <button class="btn next" @click="nextContent">#4</button> -->
  <router-link to="/" class="back">back to Home</router-link>

  <div class="detailPage" :style="{ backgroundColor: item.background }">
    <div :class="['all',{active:ani}]">
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
              <a :href="item.url" target="_blank" rel="noopener noreferrer">{{item.url}}</a>
            </div>
            <div>
              <p>{{item.function}}</p>
              <p>{{item.work}}</p>
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
      data: jsonData.data,
      ani:false
    };
  },
  components:{
    TopButton
  },
  computed: {
    currentId(){
      return Number(this.$route.params.id);
    },
    lastNum(){
      return Number(this.data.length);
    }
  },
  watch:{
    currentId:{
      handler(newId){
        this.loadData(newId);
      }
    }
  },
  methods: {
    loadData() {
      const id = this.$route.params.id;
      this.item = this.data.find(item => item.id === id);
      window.scrollTo(0, 0);

      this.ani = false;
      setTimeout(()=>{
        this.ani = true;
      },500)
    }
  },
  mounted() {
    this.loadData()


  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Zilla+Slab+Highlight:wght@400;700&display=swap');

.all{
  h1{

    opacity: 0;
  }
}  
.all.active{
  h1{

    animation: test 1s forwards;
  }
}
@keyframes test {
  100%{opacity: 1;}
}

  .box2{
    border: 1px solid black;
    // border-top: 1px solid black;
    // border-bottom: 1px solid black;
    background-color: transparent;
    pointer-events: none;

    position: fixed; 
    
    z-index: 1;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
  }

  .blur{
    position: fixed;
    z-index: 99;
    backdrop-filter: blur(10px);
    // background-color: #ffffff56;
  }
  .b1{
    width: 100vw;
    height: 25px;
    top: 0;
  }
  .b2{
    height: 100vh;
    width: 25px;
    right: 0;
  }
  .b3{
    width: 100vw;
    height: 25px;
    bottom: 0;
  }
  .b4{
    height: 100vh;
    width: 25px;
    left: 0;
  }
  
  .btn{
    display:flex;
    align-items: center;
    padding: 0 20px;
    background-color: transparent;
    cursor: pointer;
    height: 90%;
    margin: auto 0;
    font-size: 20px;
    // color: rgba(255, 255, 255, 0.7);
    color: rgba(0, 0, 0, 0.5);
    border: none;
    position: fixed;
    top: 5%;
    z-index: 2;
    text-decoration: none;
    &.prev{
      left: 1%;
    }
    &.next{
      right: 1%;
    }
    img{
      width: 20px;
    }
  }
  
  .back{
      text-decoration: none;
      color: black;
      position: fixed;
      top: 20%;
      right: 10%;
      z-index: 10;
    }

  .detailPage{
    display: flex;
    width: 100%;
    height: 100vh;
    text-align: left;
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
            color: rgba(0, 0, 0, 0.8);
          }
          h2{
            font-size: 156px;
            font-weight: bold;
            line-height: 1.1;
            // overflow-wrap: break-word
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
          div{

            a{
              margin-top: 10px;
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
          &:hover{
            color: #8A7CE9;
          }
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
</style>