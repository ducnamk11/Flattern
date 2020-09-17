<template>
    <div class="container">
        <!-- Main content -->
        <div class="row justify-content-center col-8">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Category List</h3>
                    </div>
                    <div class="card-tools m-3">
                        <button class="btn btn-primary float-right">
                            <router-link style="color:white" to="/add-category">Add Category</router-link>
                        </button>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table id="example2" class="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Category Name</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(category, index) in getallCategory" :key="category.id">
                                <td>{{index+1}}</td>
                                <td>{{category.cat_name}}
                                <td>{{category.created_at | timeformat }}
                                </td>
                                <td>
                                    <a href="" class="btn btn-success">Edit</a>
                                    <a href="" class="btn btn-danger" @click.prevent="deleteCategory(category.id)">Delete</a>
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
            this.$store.dispatch("allCategory");
        },
        computed: {
            getallCategory() {
                return this.$store.getters.getCategory;
            }
        },
        methods: {
            deleteCategory(id) {

                axios.get('/category/' + id)
                    .then((res) => {
                        this.$store.dispatch("allCategory");
                        Toast.fire({
                            icon: 'success',
                            title: 'Category Deleted in successfully'
                        })
                    })
                    .catch()
            }
        }
    }
</script>

<style scoped>

</style>
