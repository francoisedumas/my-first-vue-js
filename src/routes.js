import showBlogs from './components/showBlogs.vue'
import addBlog from './components/addBlog.vue'
import listBlogs from './components/listBlogs.vue'
import singleBlog from './components/singleBlog.vue'

export default [
    { path: '/show', component: showBlogs},
    { path: '/list', component: listBlogs},
    { path: '/add', component: addBlog},
    { path: '/blog/:id', component: singleBlog}
]