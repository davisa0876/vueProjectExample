<template>
  <div class="home">
    <button @click="decreaseCounter" class="btn btn-primary shadow">-</button>
    <span class="counter"> {{counter}} </span>
    <button @click="increaseCounter" class="btn btn-primary shadow">+</button>
  </div>
</template>
<script>
export default{
  data()  {
      return{
        counter: 0
      }
    },
    methods: {
      increaseCounter() {
        this.counter++
      },
      decreaseCounter() {
        this.counter--
      }
    }
}
</script>
<style>
 .home{
  text-align: center;
 }
 .btn, .counter{
  font-size: 40px;
  margin: 10px;
 }
</style>