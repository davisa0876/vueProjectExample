
<template>
    <div class="scriptsetup">
      <h4>
        {{ counterTitle }}:
      </h4>
      <button @click="decreaseCounter" class="btn btn-primary shadow">-</button>
      <span class="counter"> {{counter}} </span>
      <button @click="increaseCounter" class="btn btn-primary shadow">+</button>
    </div>
</template>

<script setup>
  import {ref} from 'vue'
  const counter = ref(0),
        counterTitle = ref ('Script Setup')

  const increaseCounter = () => {
      counter.value++
  }

  const decreaseCounter= () => {
      counter.value--
  }
</script>
<style>
 .scriptsetup{
  text-align: center;
 }
 .btn, .counter{
  font-size: 40px;
  margin: 10px;
 }
</style>


