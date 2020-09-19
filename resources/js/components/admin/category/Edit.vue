 <template>
    <div class="container">
        <h1>this is view vcate{{this.$route.params.categoryid}}</h1>
        <!-- Main content -->
        <div class="row justify-content-center col-8 ">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-header">
                       Edit Category
                    </div>
                    <div class="card-body">
                        <form role="form" @submit.prevent="updateCategory()">
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
        name: "Edit",
        data() {
            return {
                // Create a new form instance
                form: new Form({
                    cat_name: '',
                })
            }

        },
        mounted(){
            axios.get(`/editcategory/${this.$route.params.categoryid}`)
            .then((res)=>{
                this.form.fill(res.data.category);
            })
            .catch()
        }
        ,
        methods: {
            updateCategory() {
                this.form.post(`/update-category/${this.$route.params.categoryid}`)
                    .then((response) => {
                        this.$router.push('/category-list');
                        Toast.fire({
                            type: 'success',
                            title: 'Category updated in successfully'
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
