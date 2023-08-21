<template>
   
	<Header @update:isExpanded="handleExpand" />
	
	<div class="app">
		<!-- Sidebar -->
		<Sidebar :isExpanded="isExpanded" />

		<div :class="cardMainClass">
			<!-- Content -->
			<RouterView/>
		</div>
	</div>
	<!--router-view v-slot="{ Component }">
		<keep-alive>
			<component :is="Component" />
		</keep-alive>
	</!--router-view-->

	


</template>

<script setup>
import { ref, onMounted, onBeforeUnmount ,computed} from 'vue';

import Sidebar from './components/Sidebar.vue'
import Header  from './components/top.vue'

const isExpanded = ref(window.innerWidth > 992 ? true : false);
let cardMainClass = computed(() => isExpanded.value ? 'card-main' : 'card-main collapsed');


// You should define the method like this, without "this."
const handleExpand = (value) => {
    isExpanded.value = value; // Notice .value since isExpanded is a ref
    console.log("App.vue received isExpanded value:", isExpanded.value); 
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});


</script>


<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

.card-main{
	background: #ffffff;
	width: 95%;
	margin-left: 15px;
	margin-top: 15px;
	margin-bottom: 15px;
	margin-right: 10px;
}



@media (max-width: 1024px) {
	.card-main{
		margin-left: 15px;
		margin-right: -1px !important;
	}

	.row{
		padding-right: -1px !important;
		padding-left: 0px !important;
		margin-right: 0px !important;
		margin-left: -240px !important;
	}

	.card-body{
		margin-left: 4px;
		margin-right: 0px !important;
	}

}

@media (min-width: 1025px) {  // Only screens wider than 1024px
  .collapsed {
    margin-left: -245px !important;
    margin-right: -140px !important;
    width: 98%;
  }
}


button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>