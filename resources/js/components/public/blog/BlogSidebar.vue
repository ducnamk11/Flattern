<template>
    <div id="sidebar">
        <div class="span4">
            <aside class="right-sidebar">
                <div class="widget">
                    <form class="form-search">
                        <input @keyup="search" placeholder="Type something" type="text" v-model="keyword"
                               class="input-medium search-query">
                        <button @click.prevent="search()" type="submit" class="btn btn-square btn-theme">Search</button>
                    </form>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Categories</h5>
                    <ul class="cat">
                        <li v-for="category in allcategories">
                            <i class="icon-angle-right"></i>
                            <router-link :to="`/category/${category.id}`">{{category.cat_name}}</router-link>
                            <span> (20)</span>
                        </li>

                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Latest posts</h5>
                    <ul class="recent">
                        <li v-for="(post, index) in latestpost">
                            <img style="height:65px; width: 65px" :src="`./uploadimage/${post.photo}`" class="pull-left"
                                 alt=""/>
                            <h6>
                                <router-link :to="`/blog/${post.id}`">{{post.title}}</router-link>
                            </h6>
                            <p>
                                {{post.description | sortlength(30,'...')}}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Popular tags</h5>
                    <ul class="tags">
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Trends</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Internet</a></li>
                        <li><a href="#">Tutorial</a></li>
                        <li><a href="#">Development</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: "BlogSidebar",
        data() {
            return {
                keyword: ''
            }
        }
        ,
        computed: {
            allcategories() {
                return this.$store.getters.allcategory
            },
            latestpost() {
                return this.$store.getters.latestpost
            }
        },
        mounted() {
            this.$store.dispatch('allcategories')
            this.$store.dispatch('latestpost')
        },
        methods: {
            search:_.debounce(function () {
                this.$store.dispatch('searchPost', this.keyword)
            }, 30)
        }
    }
</script>
