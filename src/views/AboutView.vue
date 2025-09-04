<template>
  <div class="box">
  </div>
  <HeaderBtn/>
  <div class="home" id="main">
    
    <div class="title">
      <div class="main up">
        <p>FRONTEND</p>
        <p>PORTFOLIO</p>
      </div>
      <div class="main">
        <p>FRONTEND</p>
        <p>PORTFOLIO</p>
      </div>
    </div>

    <div class="about" id="about">
      <h1>About</h1>
      <div class="info">
        <div class="self">
          <div>
            <h5>안녕하세요</h5>
            <h3>변화의 흐름에 맞출수 있는 순발력과 사고력을 가진 <br/> 프론트엔드 개발자 고유나입니다.</h3>
            <h5>웹 개발의 매력에 빠져 다양한 기술을 배우고 있으며<br/>
              사용자에게 즐거운 경험을 제공하는 웹사이트를 만들고자 노력하고 있습니다.
            </h5>
            <h5>
              문제를 해결하고 창의적인 아이디어를 실현하는 과정에서 큰 보람을 느끼며,<br/>
              협업을 통해 더 나은 결과물을 만들어가는 것을 즐깁니다.
            </h5>
            <h5>항상 성장하고 도전하는 자세로, 함께 멋진 프로젝트를 만들어가고 싶습니다.</h5>
          </div>
        </div>
        <section>
          <h2>skill</h2>
          <div class="skill">
            <ul>
              <li>HTML5</li>
              <li>CSS / SCSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>jQuery</li>
            </ul>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Vercel</li>
              <li>Postman</li>
            </ul>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>InDesign</li>
              <li>Figma</li>
              <li>Notion</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div class="project" id="project">
      <h1>Projects</h1>
      <div class="line"></div>
      <nav class="ptype">
        <button @click="setType('team')" 
        :class="{active:selectedT=='team'}">Team</button> |
        <button @click="setType('personal')"
        :class="{active:selectedT=='personal'}">Personal</button>
      </nav>
      <ul>
        <ProjectMap :selectedT="selectedT"/>
      </ul>
    </div>
    <div class="contact" id="contact">
      <article>
        <h2>Contact</h2>
        <div class="img1"></div>
        <div class="line"></div>
        <div class="img2"></div>
        <p>email : <a href="mailto:bluii0157@gmail.com">bluii0157@gmail.com</a></p>
        <p>github : <a href="https://github.com/tolix-a" target="_blank" rel="noopener noreferrer">https://github.com/tolix-a</a></p>
      </article>
      <p>ⓒ 2024 YK All Rights Reserved.</p>
    </div>
  </div>
  <TopButton/>
</template>

<script lang="ts">
import ProjectMap from '@/components/ProjectMap.vue';
import TopButton from '@/components/TopButton.vue';
import HeaderBtn from '@/components/HeaderBtn.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  components: {
    TopButton,ProjectMap,HeaderBtn
  },
  mounted(){
    const elP:any = document.querySelectorAll('.up > p')
    
    window.addEventListener('scroll',function(){
      elP[0].style = `transform:translateX(-${window.scrollY}px)`;
      elP[1].style = `transform:translateX(${window.scrollY}px)`;
    })
  },
  setup(){
    const selectedT = ref('team');
    const setType = (type: string) => {
      selectedT.value = type;
    };

    
    return{
      selectedT,
      setType
      
    };
  }
})
</script>

<style lang="scss">
@import '/src/style/mixins';

  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
  }

  .title{
    position: relative;
    .up{
      z-index: 7;
      position: absolute;
      gap: 300px;
      
      font-weight: 100;
      letter-spacing: 0.2em;
      text-shadow: 
      -1px -1px 0 rgba(255, 255, 255, 0.5),  
      1px -1px 0 rgba(255, 255, 255, 0.5),
      -1px  1px 0 rgba(255, 255, 255, 0.5),
      1px  1px 0 rgba(255, 255, 255, 0.5);
      @include res('tablet'){
        letter-spacing: 0.15em;
      }
      @include res('mobile'){
        letter-spacing: 0.1em;
        gap: 200px;
      }
    }
    .main{
      width: calc(100vw - 50px);
      height: calc(100vh - 50px);
  
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
      margin-bottom: 25px;
      overflow: hidden;
      p{
        font-size: 156px;
        @include res('tablet'){
          font-size: 94px;
        }
        @include res('mobile'){
          font-size: 55px;
        }
      }
    }
  }

  .about{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    @include res('mobile'){
      display: block;
      width: 100%;
      height: 100%;
    }
    @include res('tablet') {
      height: 100%;
    }
    h1{
      font-size: 64px;
      font-weight: 300;
      padding-top: 70px;
      padding-bottom: 70px;
      @include res('mobile'){
      font-size: 52px;
      padding-bottom: 60px;
      }
      @include res('short'){
      padding-bottom: 60px;
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;
      align-items: center;
      .self{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        width: 100%;
        @include res('mobile'){
        gap: 40px;
        width: 98%;
        }
        div{
          display: flex;
          flex-direction: column;
          text-align: left;
          font-family: "Aleo";
          h3{
            font-size: 20px;
            padding: 5px 0 20px 0;
            @include res('mobile'){
              font-size: 18px;
              word-break: keep-all;
              br{
                display: none;
              }
            }
          }
          h5{
            font-size: 17px;
            line-height: 28px;
            padding-bottom: 20px;
            &:nth-of-type(1){
              padding-bottom: 0;
            }
            @include res('mobile'){
              font-size: 16px;
              text-align: justify;
              br{
                display: none;
              }
            }
          }
        }
      }
      >section{
        width: 100%;
        display: flex;
        justify-content: space-between;
        @include res('mobile'){
          flex-direction: column;
        }
        h2{
          font-size: 36px;
          font-weight: 400;
          text-align: center;
          padding-bottom: 20px;
          @include res('mobile'){
            padding-bottom: 40px;
            font-size: 32px;
          }
        }
        .skill{
          display: flex;
          gap: 30px;
          @include res('mobile'){
            justify-content: space-evenly;
            gap: 0;
          }
          ul{
            display: flex;
            flex-direction: column;
            gap: 20px;
            flex-wrap: wrap;
            li{
              font-size: 17px;
              font-weight: 300;
              padding-bottom: 10px;
              list-style: none;
              @include res('mobile'){
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }

  .project{
    width: 100%;
    height: 100%;
    h1{
      font-size: 64px;
      font-weight: 300;
      padding: 70px 0;
      @include res('mobile'){
        font-size: 52px;
        padding: 25% 0 5% 0;
      }
      @include res('tablet'){
        padding: 23% 0 5% 0;
      }
      @include res('short'){
        padding: 10% 0 2% 0;
      }
    }
    >section{
      max-width: 1440px;
      margin: 0 auto;
      padding-top: 70px;
      display: flex;
      justify-content: space-between;
      align-items: end;
      h1{
        font-size: 64px;
        font-weight: 300;
      }
    }
    >.line{
      max-width: 1440px;
      border-bottom: 1px solid black;
      margin: 0 auto;
    }
    .ptype{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 50px 0 10px 0;
      background-color: #ffffffbf;
      backdrop-filter: blur(50px);

      position: sticky;
      top: -10px;
      @include res('mobile'){
        padding: 30px 0 5px 0;
        top: 0;
      }
      button{
        border: none;
        font-size: 24px;
        cursor: pointer;
        background-color: transparent;
        &.active{ 
          color: slateblue;
          border: none;
        }
      }
    }
    ul{
      max-width: 1440px;
      margin: 0 auto;
      padding: 90px 0;
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 100px;
      align-items: center;
      @include res('mobile'){
        padding: 15px 5px;
        gap: 20px;
      }
      @include res('tablet'){
        padding: 50px 0;
        gap: 50px;
      }
    }
  }

  .contact{
    width: 100%;
    height: 100vh;
    position: relative;
    @include res('mobile'){
      height: 100%;
    }
    @include res('tablet'){
      height: 100%;
    }
    article{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      @include res('mobile'){
      height: 100%;
      }
      @include res('tablet'){
      height: 100%;
      }
      h2{
        padding-top: 70px;
        font-size: 32px;
        font-weight: 300;
        margin-bottom: 32px;
        @include res('mobile'){
        padding-top: 25%;
        }
        @include res('tablet'){
        padding-top: 23%;
        }
        @include res('short'){
        padding-top: 10%;
        }
      }
      img{
        &:nth-of-type(1){
          opacity: 0.6;
        }
      }
      .img1{
        width: 24px;
        height: 24px;
        background: url("../../public/north-star.svg");
        opacity: 0.6;
      }
      .line{
        width: 1px;
        height: 120px;
        border-left: 1px solid black;
        margin: 24px 0;
        opacity: 0.2;
        @include res('mobile'){
          height: 78px;
          margin: 20px 0;
        }
        @include res('tablet'){
          height: 70px;
        }
        @include res('short'){
          height: 60px;
          margin: 14px 0;
        }
      }
      .img2{
        width: 24px;
        height: 24px;
        background: url("../../public/star-tv.svg");
      }
      p{
        &:nth-of-type(1){
          margin-top: 110px;
          @include res('mobile'){
          margin-top: 60px;
          }
          @include res('tablet'){
          margin-top: 70px;
          }
          @include res('short'){
          margin-top: 50px;
          }
        }
        &:nth-of-type(2){
          margin: 38px 0 0 0;
          @include res('mobile'){
          margin: 25px 0 79% 0;
          }
          @include res('tablet'){
          margin: 38px 0 40% 0;
          }
          @include res('short'){
          margin: 30px 0 20% 0;
          }
        }
        a{
          color: black;
          text-decoration: underline;
        }
      }
    }
    >p{
      position: absolute;
      bottom: 25px;
      left: 0;
      right: 0;
      font-size: 14px;
      @include res('mobile'){
        bottom: 4%;
      }
    }
  }
</style>