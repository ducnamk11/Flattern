export default {
    state: {
        category: [],
        post: [],
        blogpost: [],
        singlepost: []

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
                    console.log('getPostbyId',res.data)
                    context.commit('singlePost', res.data.post);

                })
                .catch((err) => {

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
        }
    },

}
