<template>
    <div class="container">
        <!-- Main content -->
        <div class="row justify-content-center col-11 ">
            <div class="col-12 ">
                <div class="card">
                    <div class="card-header">
                        Add New Category
                    </div>
                    <div class="card-body">
                        <form role="form" enctype="multipart/form-data" @submit.prevent="addnewPost()">
                            <div class="form-group">
                                <label for="TitleId">Title </label>
                                <input required type="text" class="form-control" id="TitleId"
                                       placeholder="Enter Category" v-model="form.title" name="title">
                            </div>
                            <div class="form-group">
                                <label for="descriptionId">Description </label>
                                <markdown-editor v-model="form.description"></markdown-editor>
                            </div>
                            <div class="form-group">
                                <label for="selectId">Select</label>
                                <select id="selectId" class="form-control" v-model="form.cat_id">
                                    <option disabled value="">--Select--</option>
                                    <option :value="category.id" v-for="category in getallcategory">
                                        {{category.cat_name}}
                                    </option>
                                </select>

                            </div>
                            <div class="form-group">
                                <label for="photoId">Photo</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input @change="changePhoto($event)" type="file" class="custom-file-input"
                                               id="photoId">
                                        <label class="custom-file-label" for="photoId">Choose file</label>
                                    </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="">Upload</span>
                                    </div>
                                </div>
                                <img class="mt-2" :src="form.photo" height="140px" alt="">
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Save</button>
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
                form: new Form({
                    title: '',
                    description: '',
                    cat_id: '',
                    photo: '',
                })
            }
        },
        mounted() {
            this.$store.dispatch('allCategory');
        },
        computed: {
            getallcategory() {
                return this.$store.getters.getCategory
            }
        },
        methods: {
            addnewPost() {
                this.form.post('/savepost')
                    .then((res) => {
                        this.$router.push('/post-list');
                        Toast.fire({
                            type: 'success',
                            title: 'Post Added successfully'
                        })

                    })
            },
            changePhoto(event) {
                let file = event.target.files[0];
                if (file.size > 4048576) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Size image is wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                } else {
                    let reader = new FileReader();
                    reader.onload = event => {
                        this.form.photo = event.target.result
                    };
                    reader.readAsDataURL(file);
                }
            }
        }

    }
</script>

<style scoped>

</style>
