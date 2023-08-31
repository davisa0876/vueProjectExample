<template>
  <div class="about">
    <h4>{{appTitle}}</h4>
    <textarea v-autofocus />
  </div>
</template>

<script setup>
  import {reactive, computed} from 'vue'
  import {vAutofocus} from '@/directives/vAutofocus'

  const appTitle = 'About'
</script>


<style>
 .about{
  text-align: center;
 }
 .counter{
  font-size: 40px;
  margin: 10px;
 }
</style>
