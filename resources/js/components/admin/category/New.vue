<template>
    <div class="container">
        <!-- Main content -->
        <div class="row justify-content-center col-8 ">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-header">
                        Add New Category
                    </div>
                    <div class="card-body">
                        <form role="form" @click.prevent="addCategory()">
                            <div class="form-group">
                                <label for="categoryId">Category </label>
                                <input required type="text" class="form-control" id="categoryId"
                                       placeholder="Enter Category" v-model="form.cat_name" name="cat_name">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>


                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "New",
        data() {
            return {
                // Create a new form instance
                form: new Form({
                    cat_name: '',
                })
            }

        },
        methods: {
            addCategory() {
                this.form.post('/add-category')
                    .then((response) => {
                        this.$router.push('/category-list');
                        Toast.fire({
                            type: 'success',
                            title: 'Category Added successfully'
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }

    }
</script>

<style scoped>

</style>
