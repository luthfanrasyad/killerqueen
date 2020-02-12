<template>
  <div>
    <v-img :src="$page.articles.url"></v-img>
    <v-container>
      <h1>{{$page.articles.title}}</h1>
      <br />
      <p v-html="richtextToHTML($page.articles.content)"></p>
    </v-container>
  </div>
</template>
<script>
import * as contentful from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richtextToHTML (content) {
      const document = {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data:{},
            content: [
              {
                nodeType: 'text',
                value: 'Hello',
                marks: [{ type: 'bold' }],
                data: {}
              },
              {
                nodeType: 'text',
                value: ' world!',
                marks: [{ type: 'italic' }],
                data: {}
              },
            ],
          },
        ]
      };
      console.info(content,document)
      return documentToHtmlString(content)
    }
  }
}
</script>
<page-query>

query ($id: ID!) {
	articles(id: $id ) {
    url
    title
    content {
      nodeType
      content {
        nodeType
        content {
          value
          nodeType
          data {
            uri
          }
          marks {
            type
          }
          content{
            value
          }
    
        }
      }
    }
  }
}
</page-query>