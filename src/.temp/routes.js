export default [
  {
    path: "/articles/:slug/",
    component: () => import(/* webpackChunkName: "page--src--templates--articles-vue" */ "/Users/ovo/Documents/MINE/killerqueen/src/templates/Articles.vue")
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

