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
                      <li><router-link to="/postDetail/:id1"><label class="fa fa-angle-double-right"> Post 1</label></router-link></li>
                      <li><router-link to="/postDetail/:id2"><label class="fa fa-angle-double-right"> Post 2</label></router-link></li>
                      <li><router-link to="/postDetail/:id3"><label class="fa fa-angle-double-right"> Post 3</label></router-link></li>
                    </ul>    
                </div>
            </div>
        </div>

    </div>


</template>

<script setup>
   import { vAutofocus } from '@/directives/vAutofocus';

</script>

<style scoped>
    .card-body{
        margin-top: 10px !important;
    }
</style>