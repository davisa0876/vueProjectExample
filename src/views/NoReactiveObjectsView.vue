
<template>
    <div class="scriptsetup">
      <h4>
        {{ counterData.title }}:
      </h4>

      <h2>
        {{ appTitle }}:
      </h2>

      <button @click="decreaseCounter" class="btn btn-primary shadow">-</button>
      <span class="counter"> {{counterData.count}} </span>
      <button @click="increaseCounter" class="btn btn-primary shadow">+</button>

        <div class="edit">
          <h4>Edit Counter Title</h4>
          <input v-model="counterData.title" type="text">
        </div>
    </div>


</template>

<script setup>
  import {reactive} from 'vue'

  const appTitle = 'This is my Counter App'


  const counterData = reactive(
    {
      count:  0,
      title: 'Non Reactive Objects'
    }
  )      

  const increaseCounter = () => {
    counterData.count++
  }

  const decreaseCounter= () => {
    counterData.count--
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
.edit{
  margin-top: 60px;
}

.example-code pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
}

</style>


