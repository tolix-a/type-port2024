<template>
  
  <li v-for="(item, index) in filterData" :key="index">
    <div>
      <h3>#{{ index + 1 }} {{ item.title }}</h3>
      <p>{{ item.type2 }}</p>
      <p>{{ item.date }}</p>
      <br/>
      <p>{{ item.skill }}</p>
      <br/>
      <p>{{ item.function }}</p>
      <div class="button3">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">배포링크</a>
        <a :href="item.git" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
    <figure>
      <img :src="item.thumb" />
    </figure>
  </li>
</template>

<script lang="ts">
import jsonData from '@/assets/data.json';
import { Project } from '@/types/data';
import { defineComponent } from 'vue';

export default defineComponent({
  data(){
    return{
      data: jsonData.data as Project[]
    }
  },
  props: {
    selectedT: {
      type: String,
      required: true
    }
  },
  computed:{
    filterData(): Project[] {
      return this.data.filter(item => item.sort === this.selectedT);
    }
  }
})
</script>

<style lang="scss" scoped>
@import '/src/style/mixins';

  li{
    font-family: 'Inter';
    width: 80%;
    height: 500px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
    padding: 20px 0;
    &:nth-of-type(2n){
      flex-direction: row-reverse;
      div{
        width: initial;
      }
      figure{
        img{
          box-shadow: -30px 30px 15px 5px rgba(0, 0, 0, 0.25);
          @include res('mobile'){
          box-shadow: none;
          }
        }
      }
      @include res('mobile'){
      flex-direction: row;
      }
    }
    @include res('mobile'){
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      gap: 0;
    }
    @include res('tablet'){
      gap: 30px;
      height: 100%;
    }
    div{
      width: 50%;
      text-align: left;
      @include res('mobile'){
        width: 100%;
      }
      h3{
        font-size: 48px;
        font-weight: 500;
        color: white;
        text-shadow: 
          -1px -1px 0 black,  
          1px -1px 0 black,
          -1px  1px 0 black,
          1px  1px 0 black;
        margin-bottom: 30px;
        @include res('mobile'){
          font-size: 30px;
          margin-bottom: 20px;
        }
        @include res('tablet'){
          font-size: 36px;
        }
      }
      p{
        font-size: 20px;
        font-weight: 300;
        @include res('mobile'){
          font-size: 16px;
        }
        @include res('tablet'){
          font-size: 18px;
        }
      }
      .button3{
        display: flex;
        gap: 30px;
        align-items: baseline;
        margin-bottom: 20px;
        a{
          font-size: 18px;
          font-weight: bold;
          color: black;
          word-break: keep-all;
          &:hover{
            color: slateblue;
          }
        }
      }
      >a{
        display: inline-block;
        margin-top: 30px;
        font-size: 28px;
        text-decoration: none;
        color: white;
        img{
          margin-left: -5px;
          width: 40px;
          height: 40px;
          opacity: 0.8;
        }
      }
    }
    figure{
      width: 500px;
      height: 500px;
      @include res('tablet'){
        width: 30vw;
        height: 30vw;
      }
      @include res('mobile'){
        width: 100%;
        height: 50vw;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 30px 30px 15px 5px rgba(0, 0, 0, 0.25);
        @include res('mobile'){
          box-shadow: none;
        }
      }
    }
  }
</style>