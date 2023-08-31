<template>
	 <aside :class="{ open: isExpanded, hide: !isExpanded }">
		<h2>Menu</h2>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons"><label class="fa fa-home"></label></span>
				<span class="text">Home</span>
			</router-link>

			<router-link to="/about" class="button">
				<span class="material-icons"><label class="fa fa-odnoklassniki"></label></span>
				<span class="text">About</span>
			</router-link>

			<!-- Dropdown for Simple Examples -->

			<div class="dropdown">

				<button @click.stop="toggleDropdown('simpleExamples')">
					
					<span class="material-icons"><label class="fa fa-code"></label></span>
					<span class="text">Simple Examples</span>
					<i :class="['fa', 'fa-chevron-down', { 'rotated': currentDropdown === 'simpleExamples' }]"></i>
				</button>

				<div v-if="currentDropdown === 'simpleExamples'" class="dropdown-menu ">
					<router-link to="/example"><label class="fa fa-angle-double-right">Composition API</label></router-link>
					<router-link to="/scriptsetup"> <label class="fa fa-angle-double-right"> Script Setup</label></router-link>
					<router-link to="/TwoWayDataBinding"><label class="fa fa-angle-double-right"> Two-Way Data Binding</label></router-link>
					<router-link to="/ReactiveObjects"><label class="fa fa-angle-double-right"> Reactive Objects</label></router-link>
					<router-link to="/NonReactiveObjects"><label class="fa fa-angle-double-right"> Non Reactive Objects</label></router-link>
					<router-link to="/ParametersToMethod"><label class="fa fa-angle-double-right"> Passing Parameters</label></router-link>
					<router-link to="/ComputedProperties"><label class="fa fa-angle-double-right"> Computed Properties</label></router-link>
					<router-link to="/watch"><label class="fa fa-angle-double-right"> Watch</label></router-link>
				</div>
			</div>

			<div class="dropdown">
				<button @click.stop="toggleDropdown('apiCalls')">
					<span class="material-icons"><label class="fa fa-eye"></label></span>
					<span class="text">API Calls</span>
					<i :class="['fa', 'fa-chevron-down', { 'rotated': currentDropdown === 'apiCalls' }]"></i>
				</button>
				<div v-if="currentDropdown === 'apiCalls'" class="dropdown-menu">
					<router-link to="/webcrawler"><label class="fa fa-angle-double-right"> Web Crawler</label></router-link>
					<router-link to="/iplocation"><label class="fa fa-angle-double-right"> IP Location</label></router-link>
				</div>
			</div>


			<div class="dropdown">
				<button @click.stop="toggleDropdown('posts')">
					<span class="material-icons"><label class="fa fa-eye"></label></span>
					<span class="text">Posts</span>
					<i :class="['fa', 'fa-chevron-down', { 'rotated': currentDropdown === 'posts' }]"></i>
				</button>
				<div v-if="currentDropdown === 'posts'" class="dropdown-menu">
					<router-link to="/post"><label class="fa fa-angle-double-right"> first example</label></router-link>
					<router-link to="/post2"><label class="fa fa-angle-double-right"> second example</label></router-link>
				</div>
			</div>

			<!-- Dropdown for API Calls -->

		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-icons"><label class="fa fa-cog"></label></span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>


	
</template>

<script setup>
   
	import { onMounted, onBeforeUnmount, ref, defineEmits  } from 'vue';




	const currentDropdown = ref('');
	const { isExpanded } = defineProps(['isExpanded']);
	const emits = defineEmits(['update:isExpanded']);
	
	onMounted(() => {document.addEventListener('click', outsideClickListener)})

	onBeforeUnmount(() => {
		document.removeEventListener('click', outsideClickListener);
	});

	const outsideClickListener = (event) => {
		if (!event.target.closest('.dropdown')) {
			console.log("Outside Click Detected");
			currentDropdown.value = '';
		}

		if (!event.target.closest('aside')) {
			console.log("Outside Click Detected");
			currentDropdown.value = '';
			emits('update:isExpanded', false);  // Close the sidebar
		}
	};

	const toggleDropdown = (dropdownName) => {
		console.log(`Toggling dropdown: ${dropdownName}`);
		if (currentDropdown.value === dropdownName) {
			currentDropdown.value = '';
		} else {
			currentDropdown.value = dropdownName;
		}
	};

</script>

<style lang="scss" scoped>
	aside {
		display: flex;
		flex-direction: column;
		background-color: var(--dark);
		color: var(--light);
		width: 255px;
		overflow: hidden;
		min-height: 100vh;
		padding: 1rem;
		transition: 0.2s ease-in-out;
		font-family: "feather";

		@media (max-width: 1024px) {
				width: 100% !important;
		}


		z-index: 1000;  /* Or any high value to ensure it appears on top */
 	    position: relative;  /* Position can also be `absolute` or `fixed` */


		&.is-expanded {
			width: var(--sidebar-width);

			.menu-toggle-wrap {
				top: -3rem;
				.menu-toggle {
					transform: rotate(-180deg);
				}
			}

			h3,
			.button .text {
				opacity: 1;
			}

			.button {
				.material-icons {
					margin-right: 1rem;
				}
			}

			.footer {
				opacity: 0;
			}
		}



		.flex {
			flex: 1 1 0%;
		}



		.menu-toggle-wrap {
			display: flex;
			justify-content: flex-end;
			margin-bottom: 1rem;
			position: relative;
			top: 0;
			transition: 0.2s ease-in-out;

			.menu-toggle {
				transition: 0.2s ease-in-out;

				.material-icons {
					font-size: 2rem;
					color: var(--light);
					transition: 0.2s ease-out;
				}

				&:hover {
					.material-icons {
						color: var(--primary);
						transform: translateX(0.5rem);
					}
				}
			}
		}

		h3,
		.button .text {
		
			transition: opacity 0.3s ease-in-out;
			text-align: left !important;
			color: white !important;
		}

		h2 {
			color: white;
			font-size: 0.875rem;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
			margin-top: 65px;
		}

		.menu {
			margin: 0 -1rem;



			.button {
				display: flex;
				align-items: center;
				text-decoration: none;
				transition: 0.2s ease-in-out;
				padding: 0.5rem 1rem;
				color: white !important;
				.material-icons {
					font-size: 2rem;
					color: var(--light);
					transition: 0.2s ease-in-out;
					font-size: 0.87rem;
				}

				.text {
					color: var(--light);
					transition: 0.2s ease-in-out;
					font-size: 0.8rem;
					color: white !important;
				}

				&:hover {
					background-color: var(--dark-alt);

					.material-icons,
					.text {
						color: white !important;
					}
				}

				&.router-link-exact-active {
					background-color: var(--dark-alt);
					border-right: 5px solid var(--primary);

					.material-icons,
					.text {
						color: var(--primary);
					}
				}
			}

			.button, .dropdown > button {
				display: flex;
				align-items: center;
			}

			.button .material-icons, .dropdown > button .material-icons {
				margin-right: 1rem;  // or whatever value is appropriate
			}
		}

		.dropdown {
			display: block;
			position: relative;
			width: 100%;

			button {
				width: 100%;
				display: flex;
				align-items: center;
				text-decoration: none;
				background: none;
				border: none;
				color: inherit;
				padding: 0.5rem 1rem;
				justify-content: flex-start;
				position: relative;
				padding-right: 40px;
				font-size: 0.8rem;

				.material-icons {
					margin-right: 0.5rem;
				}

				&:hover {
					background-color: #fff;

					.material-icons,
					.text {
						color: var(--primary);
					}
				}

				&:focus {
					outline: none;
				}

				.fa-chevron-down {
					position: absolute;
					right: 15px;
					top: 50%;
					transform: translateY(-50%);
					transition: transform 0.3s ease-in-out;

					&.rotated {
						transform: translateY(-50%) rotate(180deg);
					}
				}
			}

			.dropdown-menu {
				position: relative;
				flex-direction: column;
				background-color: #1e293b;
				display: flex;
				width: 98%;
				border: 1px solid rgb(102, 100, 100);
				> a {
					padding: 0.5rem 1rem;
					color: #fff;
					&:hover {
						background-color: lighten(#ecf0f7, 10%);
						display: flex;
						color: #1e293b;
					}

					&.router-link-exact-active {
						background-color: lighten(#3a5485, 5%);
						border-left: 5px solid var(--primary);
						display: flex;
						color: #fff;
						text-decoration: none;
						.material-icons,
						.text {
							color: #1e293b;
						}
					}
				}
			}
		}
	}
	.hide {
		opacity: 0;
		transform: translateX(-100%);
		transition: transform 0.3s ease, opacity 0.3s ease;
	}






</style>
