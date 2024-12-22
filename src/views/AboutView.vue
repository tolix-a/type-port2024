<template>
  <div class="box">
  </div>
  <HeaderBtn/>
  <div class="home" id="main">
    <div class="main">
      <p>FRONTEND</p>
      <p>PORTFOLIO</p>
    </div>
    <div class="about" id="about">
      <h1>About</h1>
      <div class="info">
        <div class="self">
          <!-- <figure>
            <svg width="240" height="240">
              <defs>
                <mask id="photo-mask">
                  <circle cx="120" cy="120" r="100" fill="white"/>
                </mask>
              </defs>
              <image mask="url(#photo-mask)" href="../assets/img/penguin.jpg"
              width="320" height="240"
              x="-100"
              />
              <circle cx="120" cy="120" r="120" stroke="black" stroke-width="5" fill="none" stroke-dasharray="2, 40" />
            </svg>
          </figure> -->
          <div>
            <h5>안녕하세요!</h5>
            <h3>새로운 것에 도전하는 것을 좋아하는 <br/>신입 프론트엔드 고유나입니다.</h3>
            <h5>웹 개발의 매력에 빠져 다양한 기술을 배우고 있으며<br/>
              사용자에게 즐거운 경험을 제공하는 웹사이트를 만들고자 노력하고 있습니다.
            </h5>
            <h5>
              문제를 해결하고 창의적인 아이디어를 실현하는 과정에서 큰 보람을 느끼며,<br/>
              협업을 통해 더 나은 결과물을 만들어가는 것을 즐깁니다.
            </h5>
            <h5>항상 성장하고 도전하는 자세로, 함께 멋진 프로젝트를 만들어가고 싶습니다!</h5>
          </div>
        </div>
        <section>
          <h2>skill</h2>
          <div class="skill">
            <ul>
              <li>HTML5</li>
              <li>CSS / SCSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <ul>
              <li>jQuery</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>TypeScript</li>
            </ul>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Vercel</li>
            </ul>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Indesign</li>
              <li>Figma</li>
              <li>Notion</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <div class="project" id="project">
      <h1>Projects</h1>
      <!-- <section>
        <h1>Projects</h1>
        <router-link to="/more"><img src="../assets/icon/double-right-black.svg"/></router-link>
      </section> -->
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
        <!-- <img src="../../public/north-star.svg"/> -->
        <div class="line"></div>
        <!-- <img src="../../public/star-tv.svg"/> -->
        <div class="img2"></div>
        <p>email <a href="mailto:apple@gmail.com">bluii0157@gmail.com</a></p>
        <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a></p>
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
    const elP:any = document.querySelectorAll('.main > p')
    
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

  .main{
    width: calc(100vw - 50px);
    height: calc(100vh - 50px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: black;
    margin-top: 25px;
    margin-bottom: 25px;
    overflow: hidden;

    // gap: 5%;
    p{
      font-size: 156px;
      @include res('tablet'){
        font-size: 84px;
      }
      @include res('mobile'){
        font-size: 60px;
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
    h1{
      font-size: 64px;
      font-weight: 300;
      padding-top: 70px;
      padding-bottom: 70px;
    }
    .info{
      // display: grid;
      // grid-template-columns: 50% 50%;
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
        figure{
        }
        div{
          display: flex;
          flex-direction: column;
          text-align: left;
          font-family: "Aleo";
          h3{
            font-size: 24px;
            padding: 5px 0 20px 0;
            @include res('mobile'){
              font-size: 20px;
              word-break: keep-all;
              br{
                display: none;
              }
            }
          }
          h5{
            line-height: 28px;
            padding-bottom: 20px;
            &:nth-of-type(1){
              padding-bottom: 0;
            }
            @include res('mobile'){
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
        // align-items: center;
        justify-content: space-between;
        // flex-direction: column;
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
              font-size: 16px;
              font-weight: 300;
              padding-bottom: 10px;
              list-style: none;
            }
          }
        }
      }
    }
  }
  .project{
    width: 100%;
    height: 100%;
    // background-color: lavender;
    // max-width: 1440px;
    // height: 100vh;
    h1{
      font-size: 64px;
      font-weight: 300;
      padding: 70px 0;
      @include res('mobile'){
        padding: 70px 0 40px 0;
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
      // background-color: white;
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
          // background-color: slateblue;
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
        padding: 15px;
        gap: 20px;
      }
    }
  }

  .contact{
    height: 100vh;
    position: relative;
    width: 100%;
    article{
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      h2{
        padding-top: 70px;
        font-size: 32px;
        font-weight: 300;
        margin-bottom: 32px;
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
        height: 130px;
        border-left: 1px solid black;
        margin: 24px 0;
      }
      .img2{
        width: 24px;
        height: 24px;
        background: url("../../public/star-tv.svg");
      }
      p{
        &:nth-of-type(1){
          margin: 110px 0 38px 0;
        }
        &:nth-of-type(1){
          margin: 110px 0 38px 0;
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
    }
  }
</style>