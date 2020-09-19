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
                            <tr v-for="(post, index) in allpost">

                                <td>{{index+1}}</td>
                                <td v-if="post.user">{{post.user.name}}</td>
                                <td v-if="post.category">{{post.category.cat_name}}</td>
                                <td>{{post.title| sortlength(40,'...')}}</td>
                                <td>{{post.description | sortlength(40,'...')}}</td>
                                <td><img style="height:80px" :src="ourImage(post.photo)" alt=""></td>
                                <td>
                                    <router-link :to="`/edit-post/${post.id}`" :key="post.id">Edit</router-link>
                                    <a href="" @click.prevent="deletePost(post.id)">Delete</a>
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
            allpost() {
                return this.$store.getters.getAllPost
            }
        },
        methods: {
            ourImage(img) {
                return "uploadimage/" + img;
            },
            deletePost(id) {
                axios.get('/delete/' + id)
                    .then(() => {
                        this.$store.dispatch('getAllPost')
                        Toast.fire({
                            type: 'success',
                            title: 'Post deleted successfully'
                        })
                    })
                    .catch()
            }
        }
    }
</script>

<style scoped>

</style>
