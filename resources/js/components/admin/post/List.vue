<template>
    <div class="container">
        <!-- Main content -->
        <div class="row justify-content-center col-12">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Post List</h3>
                    </div>
                    <div class="card-tools m-3">
                        <button class="btn btn-primary float-right">
                            <router-link style="color:white" to="/add-post">Add Post</router-link>
                        </button>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>photo</th>
                                <th>action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(post, index) in allpost" >

                                <td>{{index+1}}</td>
                                <td>{{post.user_id}}</td>
                                <td>{{post.cat_id}}</td>
                                <td>{{post.title}}</td>
                                <td>{{post.description}}</td>
                                <td><img style="height:80px" :src="post.photo" alt=""></td>
                                <td>

                                    <a href="" :key="post.id" class="btn btn-success">Edit</a>
                                    <a href="" class="btn btn-danger  ">Delete</a>
                                </td>

                            </tr>


                            </tbody>

                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        mounted() {
            this.$store.dispatch('getAllPost')
        },
        computed: {
            allpost(){
                return this.$store.getters.getAllPost
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
