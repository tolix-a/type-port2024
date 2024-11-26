<template>
  <div class='header'>
    <!-- <button><img src="../../public/moon_black.svg"/></button> -->
    <button @click="toggleDarkMode">
      <img :src="darkMode ? darkImage : lightImage" alt="Theme Toggle" />
    </button>
    <nav>
      <button @click="toSection('main')">Home</button>
      <button @click="toSection('about')">About</button>
      <button @click="toSection('project')">Projects</button>
      <button @click="toSection('contact')">Contact</button>
    </nav>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  methods: {
    toSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({behavior:'smooth'});
      }
    }
  },

  setup() {
    // 다크 모드 상태 관리
    const darkMode = ref(false);

    // 다크 모드와 라이트 모드 이미지 경로
    const darkImage = ('/moon_black.svg');
    const lightImage = ('/moon.svg'); 
    // const lightImage = require('@/assets/sun_black.svg');

    // 다크 모드 토글 함수
    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      // localStorage에 다크 모드 상태 저장
      localStorage.setItem('darkMode', darkMode.value);
      // body에 다크 모드 클래스 적용
      document.getElementById('app').setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
    };

    // 초기 다크 모드 상태 로드
    onMounted(() => {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      darkMode.value = savedDarkMode;
      document.getElementById('app').setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
    });

    return {
      darkMode,
      toggleDarkMode,
      darkImage,
      lightImage
    };
  }
}
</script>
<style lang="scss">
@import '/src/style/mixins';

  .header{
    width: calc(100vw - 50px);
    background-color: white;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid black;
    @include res('mobile'){
      width: 100%;
    }
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      img{
        width: 20px;
        height: 20px;
        padding-left: 5px;
      }
    }
    nav{
      button{
        font-family: "Aleo", serif;
        font-size: 20px;
        font-weight: 300;
      }
    }
  }
</style>