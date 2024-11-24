<template>
  <div class='header'>
    <button><img src="../../public/moon_black.svg"/></button>
    <nav>
      <button @click="toSection('main')">Home</button>
      <button @click="toSection('about')">About</button>
      <button @click="toSection('project')">Projects</button>
      <button @click="toSection('contact')">Contact</button>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    toSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({behavior:'smooth'});
      }
    }
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