// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
  api.loadSource(async actions => {
    const space_id = '5qlhalarmq4j'
    const access_token = 'HLel2mGYSRe6hgaG8NK_4uepzdraV7QZWnPiY-AFPIk'
    const content_type = 'articles'
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    const { data } = await axios.get(
      `https://cdn.contentful.com/spaces/${space_id}/entries?access_token=${access_token}&content_type=${content_type}`
    )
    const collection = actions.addCollection({
      typeName: 'Articles'
    })
    const collection2 = actions.addCollection({
      typeName: 'Assets'
    })
  
    for (const item of data.items) {
      const x = data.includes.Asset.filter( asset => asset.sys.id === item.fields.thumbnail.sys.id)
      item.fields.url = x[0].fields.file.url
      var d = new Date(item.sys.createdAt)
      d = d.getDate() +'-'+d.getMonth()+'-'+d.getFullYear()
      console.info(item.fields.content.content)
      collection.addNode({
        date_created: d,
        description: item.fields.description.content[0].content[0].value,
        title: item.fields.title,
        slug: item.fields.slug,
        content: item.fields.content,
        url: item.fields.url,
        // fields: item.fields,
      })
    }
  })
}
