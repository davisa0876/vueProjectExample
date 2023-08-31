<template>
    <div class="row row-sm">
        <div class="col-lg-12 col-md-12">
            <div class="card  box-shadow-0 ">
                <div class="card-header">
                    <h4>Vertical Form</h4>
                </div>
                <div class="card-body pt-0">
                        <div class="">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Post - {{ $route.params.id }}</label>
                            </div>
                        </div>
 
                        <div class="form-group mb-0 mt-3 justify-content-end">
                            <div>
                                <button  class="btn btn-warning  ms-4" @click="showPostId"> Show ID </button> 
                                <button  class="btn btn-success ms-4" @click="goHome3Seconds">Go home in 3 seconds</button>
                                <button  class="btn btn-danger ms-4" @click="goToFirstPost">Go to first post</button>
                            </div>
						</div>


                        <div class="form-group mb-0 mt-3 justify-content-end">
                            <div>
                                <router-link to="/post"> <button type="submit" class="btn btn-primary"> &lt;&lt; back</button> </router-link>
                            </div>
						</div>
                    </div>
            </div>
        </div>

    </div>


</template>
<script setup>
    import { useRoute, useRouter } from 'vue-router';
    const route = useRoute()
    const router = useRouter()
    const showPostId = () => {
        alert (`The ID of this post is: ${ route.params.id }`)
    }

    const goHome3Seconds = () => {
        setTimeout(()=>{
            router.push( {name: 'home'} )
        },3000)

    }

    const goToFirstPost = () => {
        router.push({
                       name: 'postsDetail',
                       params: {
                                id: 'id1'
                               } 
                    })
        
    }


    
</script>


<style scoped>
    .card-body{
        margin-top: 10px !important;
    }
</style>