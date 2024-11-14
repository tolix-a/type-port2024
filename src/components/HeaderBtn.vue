<template>
  <div class='header'>
    <button><img src="../../public/moon_black.svg"/></button>
    <nav>
      <button>Home</button>
      <button>About</button>
      <button>Projects</button>
    </nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .header{
    width: calc(100vw - 50px);
    // background-color: red;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
      img{
        width: 40px;
        height: 40px;
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