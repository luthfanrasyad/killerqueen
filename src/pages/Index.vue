<template>
  <Layout>
    <v-row>
      <v-card v-for="edge in $page.allArticles.edges" :key="edge.node.id" class="mx-auto" max-width="380" max-height="400" style="margin-bottom: 10px;" 
      :to="`articles/${edge.node.slug}`">
        <v-img :src="edge.node.url" height="250" max-width="380px"> </v-img>
        <v-card-title>{{edge.node.title}} </v-card-title>
        <v-card-subtitle class="pb-0">{{edge.node.description}}</v-card-subtitle>
        <v-card-text>{{edge.node.date_created}}</v-card-text>
        <br>
      </v-card>
    </v-row>


  </Layout>
</template>
<page-query>
query {
  allArticles{
    edges {
      node {
        date_created
        description
        url
        slug
        title
      }
    }
  }
}
</page-query>
<script>

export default {
  computed: {

  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
