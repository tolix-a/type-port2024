<template>
  <div class="box">
  </div>
  <HeaderBtn/>
  <div class="home" id="main">
    <div class="main">
      <p>FRONTEND<br/>PORTFOLIO</p>
      <!-- <p>FRONTEND<br/>PORTFOLIO</p>
      <p>FRONTEND<br/>PORTFOLIO</p> -->
    </div>
    <div class="about" id="about">
      <h1>About</h1>
      <div class="self">
        <figure>
          <!-- <img src="../../public/penguin.jpg"/> -->
          <svg width="480" height="480">
            <defs>
              <mask id="photo-mask">
                <circle cx="240" cy="240" r="215" fill="white"/>
              </mask>
            </defs>
            <image mask="url(#photo-mask)" href="../assets/img/penguin.jpg"
            width="640" height="480"
            x="-100"
            />
            <circle cx="240" cy="240" r="240" stroke="black" stroke-width="5" fill="none" stroke-dasharray="2, 40" />
          </svg>
        </figure>
        <div>
          <h3>안녕하세요!</h3>
          <h4>새로운 것에 도전하는 것을 좋아하는</h4>
          <h3>신입 프론트엔드 네모네모입니다.</h3>
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
        <div>
          <p>HTML5</p>
          <p>CSS / SCSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>jQuery</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>TypeScript</p>
        </div>
        <div>
          <p>Git</p>
          <p>Github</p>
          <p>MongoDB</p>
          <p>Firebase</p>
          <p>Vercel</p>
          <p>Photoshop</p>
          <p>Illustrator</p>
          <p>Indesign</p>
          <p>Figma</p>
          <p>Notion</p>
        </div>
        <!-- <div class="1">
          <p>HTML5</p>
          <p>CSS / SCSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>jQuery</p>
          <p>Next.js</p>
          <p>Vue.js</p>
          <p>TypeScript</p>
        </div>
        <div class="2">
          <p>Git</p>
          <p>Github</p>
          <p>MongoDB</p>
          <p>Firebase</p>
          <p>Vercel</p>
        </div>
        <div class="3">
          <p>Photoshop</p>
          <p>Illustrator</p>
          <p>Indesign</p>
          <p>Figma</p>
          <p>Notion</p>
        </div> -->
      </section>
    </div>
    <div class="project" id="project">
      <h1>Projects</h1>
      <!-- <section>
        <h1>Projects</h1>
        <router-link to="/more"><img src="../assets/icon/double-right-black.svg"/></router-link>
      </section> -->
      <div class="line"></div>
      <ul>
        <ProjectMap/>
      </ul>
    </div>
    <div class="contact" id="contact">
      <article>
        <h2>Contact</h2>
        <img src="../../public/north-star.svg"/>
        <div class="line"></div>
        <img src="../../public/star-tv.svg"/>
        <p><a href="mailto:apple@gmail.com">email</a></p>
        <p><a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a></p>
      </article>
      <!-- <p>ⓒ 2024 YK All Rights Reserved</p> -->
    </div>
  </div>
  <TopButton/>
</template>

<script>
import ProjectMap from '@/components/ProjectMap.vue';
import TopButton from '@/components/TopButton.vue';
import HeaderBtn from '@/components/HeaderBtn.vue';

export default {
  data () {
    return {
        publicPath: process.env.BASE_URL
    }
  },
  components: {
    TopButton,ProjectMap,HeaderBtn
  }
}
</script>

<style lang="scss">
@import '/src/style/mixins';

.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

  .main{
    width: calc(100vw - 50px);
    height: calc(100vh - 50px);
    display: flex;
    // justify-content: center;
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

      &:nth-of-type(1){
        // margin-left: 50px;
      }
      &:nth-of-type(2){
        rotate: 180deg;
        align-self: baseline;
        color: aquamarine;
      }
      &:nth-of-type(3){
        transform: scaleY(-1);
        align-self: end;
        margin-left: -400px;
        margin-bottom: 50px;
        color:violet;
      }
    }
  }
  .about{
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: #EAE4DA;
    h1{
      font-size: 64px;
      font-weight: 300;
      padding-top: 70px;
      padding-bottom: 100px;
    }
    .self{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 137px;
      // height: 100vh;
      figure{
      }
      div{
        display: flex;
        flex-direction: column;
        text-align: left;
        font-family: "Aleo";
        h3{
          font-size: 24px;
          &:nth-of-type(2){
            padding: 30px 0;
            margin-left: -20px;
          }
        }
        h4{
          padding-top: 10px;
        }
        h5{
          line-height: 28px;
          padding-bottom: 20px;
          &:nth-of-type(2){
            // margin-left: 20px;
          }
        }
      }
    }
    >section{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100vh;
      gap: 60px;
      // text-align: left;
      h2{
        font-size: 48px;
        font-weight: 400;
        text-align: center;
      }
      div{
        display: flex;
        gap: 20px;
        p{
          font-size: 24px;
          font-weight: 300;
          padding-bottom: 10px;
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
    ul{
      max-width: 1440px;
      margin: 0 auto;
      padding: 100px 0;
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 100px;
    }
  }

  .contact{
    background-color: white;
    height: 100vh;
    >article{
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
      .line{
        width: 1px;
        height: 130px;
        border-left: 1px solid black;
        margin: 24px 0;
      }
      p{
        text-decoration: underline;
        &:nth-of-type(1){
          margin: 110px 0 38px 0;
        }
        a{
          color: black;
        }
      }
    }
  }
</style>