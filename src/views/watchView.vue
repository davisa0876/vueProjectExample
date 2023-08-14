
<template>
    <div class="scriptsetup">
      <h4>
        {{ counterData.title }}:
      </h4>

      <h2>
        {{ appTitle }}:
      </h2>

      <button @click="decreaseCounter(2,'Your are now subtracting 2', $event)" class="btn btn-primary shadow">-2</button>
      <button @click="decreaseCounter(1,'Your are now subtracting 1', $event)" class="btn btn-primary shadow">-</button>
      <span class="counter"> {{counterData.count}} </span>
      <button @click="increaseCounter(1 ,'Your are now Adding 1' , $event)" class="btn btn-primary shadow">+</button>
      <button @click="increaseCounter(2 ,'Your are now Adding 2' , $event)" class="btn btn-primary shadow">+2</button>

        <div class="edit">
          <h3>Message</h3>
          {{ counterData.message }}
        </div>

        <div class="edit">
          <h3>Alert (watch)</h3>
          <div v-html="counterData.alert"></div>
        </div>

        <div class="edit">
          <h3>This counter is:  {{ OddorEven }}</h3>
        </div>

 
        <div class="edit">
          <h4>Edit Counter Title</h4>
          <input v-model="counterData.title" type="text">
        </div>
    </div>


</template>

<script setup>
  import {reactive, computed, watch} from 'vue'

  const appTitle = 'My Counter App'


  const counterData = reactive(
    {
      count:  0,
      title: 'ComputedProperties',
      message: ' ',
      alert: '<span class="alert alert-success alert-dismissible fade show" role="alert">You counter is low than 20.</span>'
    }
  )      

  const OddorEven = computed(()=>{
    if (counterData.count%2 ===0) return 'even'
    else return 'odd'
  })

  watch( () => counterData.count, (newCount,oldCount) => {
    if (newCount >=20){
        counterData.alert = '<span class="alert alert-danger mg-b-0 alert-dismissible fade show" role="alert"><strong>Well done!</strong> You counter is owver or equal 20.</span>' 
    }else{
        counterData.alert = '<span class="alert alert-success alert-dismissible fade show" role="alert">You counter is low than 20.</span>' 

    }
  })




  const increaseCounter = (amount,message,e) => {
    console.log(e)
    counterData.count  += amount
    counterData.message = message
  }

  const decreaseCounter = (amount,message,e)  => {
    console.log(e)
    counterData.count  -= amount
    counterData.message = message
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


