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
  .header{
    width: calc(100vw - 50px);
    // background-color: red;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    position: fixed;
    // left: 0;
    top: 0;
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      img{
        width: 40px;
        height: 40px;
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