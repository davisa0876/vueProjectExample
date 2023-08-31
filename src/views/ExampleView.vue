
<template>
    <div class="examples">
      <h4>
        Data(refs) & Methods
      </h4>
      <button @click="decreaseCounter" class="btn btn-primary shadow">-</button>
      <span class="counter"> {{counter}} </span>
      <button @click="increaseCounter" class="btn btn-primary shadow">+</button>
    </div>
</template>

<script>
import {ref} from 'vue'
export default{  
    setup()  {
    const counter = ref(0)

    const increaseCounter = () => {
        counter.value++
    }

    const decreaseCounter= () => {
        counter.value--
    }

    return {
        counter,
        increaseCounter,
        decreaseCounter
    }
  }
}
</script>
<style>
 .examples{
  text-align: center;
 }
 .counter{
  font-size: 40px;
  margin: 10px;
 }
</style>