<template>
  <div @contextmenu.prevent @copy.prevent>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import '/src/style/mixins';
@import '/src/style/theme';

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
#app {
  font-family: "Aleo", serif, "Inter", sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



.box{
  width: calc(100vw - 50px);
  height: calc(100vh - 50px);
  background-color: transparent;
  pointer-events: none;

  position: fixed; 
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  z-index: 11;
  @include res('mobile'){
    display: none;
  }
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.select{
  user-select: none; 
  -webkit-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
}
</style>
