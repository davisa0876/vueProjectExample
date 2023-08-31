
<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
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
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="scriptsetup">
                <h3>Message</h3>
                {{ counterData.message }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
              <div class="scriptsetup">
                  <h3>This counter is:  {{ OddorEven }}</h3>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="scriptsetup">
              <h4>Edit Counter Title</h4>
              <input v-model="counterData.title" type="text">
            </div>
          </div>
        </div>
      </div>
    </div>




</template>

<script setup>
  import {reactive, computed} from 'vue'

  const appTitle = 'My Counter App'


  const counterData = reactive(
    {
      count:  0,
      title: 'ComputedProperties',
      message: ' '
    }
  )      

  const OddorEven = computed(()=>{
    if (counterData.count%2 ===0) return 'even'
    else return 'odd'
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
 .counter{
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


