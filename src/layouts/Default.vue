<template>
  <v-app class="layout">
    <header class="header">
      <h1> Articles</h1>
    </header>
    <slot/>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 100vw;
  margin: 0 auto;
}

.header {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  background-color: purple;
  height: 80px;
  text-align: center;
  color: white;
}

.nav__link {
  margin-left: 20px;
}
</style>
