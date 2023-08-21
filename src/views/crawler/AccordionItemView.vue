<!-- AccordionItem.vue -->

<template>
  <div>
    <button class="btn btn-link" @click="toggleAccordion">
      {{ title }}
    </button>
    
    <div v-show="isOpen">
      <ul>
        <li v-for="link in links" :key="link">{{ link }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: String,
  links: Array,
  id: String
});

const emit = defineEmits();

const isOpen = ref(false);

const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
  emit('toggle', props.id);
};
</script>
