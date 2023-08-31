<template>
    <div class="row row-sm">
        <div class="col-lg-12 col-md-12">
            <div class="card  box-shadow-0 ">
                <div class="card-header">
                    <h4>Vertical Form</h4>
                </div>
                <div class="card-body pt-0">
                    <form>
                        <div class="">
                            <div class="form-group">
                                <h3>Post</h3>
                                <textarea v-autofocus></textarea>
                            </div>
                        </div>
                        <div class="form-group mb-0 mt-3 justify-content-end">
                            <div>
                                <button type="submit" class="btn btn-primary">Sign in</button>
                                <button type="submit" class="btn btn-secondary ms-4">Cancel</button>
                            </div>
						</div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <div class="row row-sm">
        <div class="col-lg-12 col-md-12">
            <div class="card  box-shadow-0 ">
                <div class="card-header">
                    <h4>Post Links</h4>
                </div>
                <div class="card-body pt-0">
                    <ul>
                      <li v-for="post in posts"
                         :key="post.id"><router-link :to="`/postDetail/${post.id}`"><label class="fa fa-angle-double-right"> {{post.title}}</label></router-link></li>
                    </ul>    
                </div>
            </div>
        </div>

    </div>


</template>

<script setup>
    import {ref} from 'vue'
    import { vAutofocus } from '@/directives/vAutofocus';

    const posts = ref([
        {   id: 'id1',
            title: 'Post 1'
        },
        {   id: 'id2',
            title: 'Post 2'
        },
        {   id: 'id3',
            title: 'Post 3'
        }
    ])

</script>

<style scoped>
    .card-body{
        margin-top: 10px !important;
    }
</style>