export default {
    state: {
        category: [],
        post: [],
        blogpost: [],
        singlepost : [],
        allcategory: [],
        latestpost: [],
        listpostbycategory: [],

    },
    getters: {
        getCategory(state) {
            return state.category
        },
        getAllPost(state) {
            return state.post
        },
        getblogPost(state) {
            return state.blogpost
        },
        singlepost(state) {
            return state.singlepost
        },
        allcategory(state) {
            return state.allcategory
        },
        latestpost(state) {
            return state.latestpost
        },
        listpostbycategory(state) {
            return state.listpostbycategory
        }

    },
    actions: {
        allCategory(context) {
            axios.get('/category')
                .then((response) => {
                    context.commit('categories', response.data.categories)
                })
        },
        getAllPost(context) {
            axios.get('/post')
                .then((res) => {
                    context.commit('allpost', res.data.posts)
                })
                .catch((err) => {

                })
        },
        getblogPost(context) {
            axios.get('/blogpost')
                .then((res) => {
                    context.commit('getblogPost', res.data.posts);

                })
                .catch((err) => {

                })
        },
        getPostbyId(context, payload) {
            axios.get('/singlepost/' + payload)
                .then((res) => {
                    console.log('getPostbyId', res.data.post.id)
                    context.commit('singlePost', res.data.post);

                })
                .catch((err) => {

                })
        },
        allcategories(context) {
            axios.get('/categories')
                .then((res) => {
                    console.log('categories', res.data)
                    context.commit('allcategories', res.data.categories);

                })
                .catch((err) => {

                })
        },
        latestpost(context){
            axios.get('/latestpost')
                .then((res)=>{
                    context.commit('getLatestPost', res.data.latestpost)
                })
        },
        getPostByCategory(context,payload){
            axios.get('/listpostbycategory/'+payload)
                .then((res)=>{
                    context.commit('getpostbycategory', res.data.getpostbycategory)
                })
        }

    },
    mutations: {
        categories(state, data) {
            return state.category = data
        },
        allpost(state, payload) {
            return state.post = payload
        },
        getblogPost(state, payload) {
            return state.blogpost = payload
        },
        singlePost(state, payload) {
            return state.singlepost = payload
        },
        allcategories(state, payload) {
            return state.allcategory = payload
        },
        getLatestPost(state, payload) {
            return state.latestpost = payload
        },
        getpostbycategory(state, payload) {
            return state.listpostbycategory = payload
        },

    },

}
