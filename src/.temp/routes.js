export default [
  {
    path: "/blog/:year-:month-:title/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/ovo/Documents/MINE/killerqueen/src/templates/Post.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/ovo/Documents/MINE/killerqueen/src/pages/About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ovo/Documents/MINE/killerqueen/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/ovo/Documents/MINE/killerqueen/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/ovo/Documents/MINE/killerqueen/node_modules/gridsome/app/pages/404.vue")
  }
]

