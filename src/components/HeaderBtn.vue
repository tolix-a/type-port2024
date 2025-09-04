<template>
  <div class='header'>
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
    const darkMode = ref(false);

    const darkImage = ('/moon.svg');
    const lightImage = ('/moon_black.svg'); 

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      localStorage.setItem('darkMode', darkMode.value);
      document.querySelector('body').setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
    };

    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('darkMode');
    });

    onMounted(() => {
      const savedDarkMode = localStorage.getItem('darkMode') === 'true';
      darkMode.value = savedDarkMode;
      document.querySelector('body').setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
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
      padding: 0.5% 0;
    }
    @include res('tablet'){
      padding: 0.3% 0;  
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
        @include res('mobile'){
          font-size: 18px;
        }
      }
    }
  }
</style>