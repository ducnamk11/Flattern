export default {
    state: {
        category: [],
        post: [],
        blogpost: []

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
        }
    },

}
