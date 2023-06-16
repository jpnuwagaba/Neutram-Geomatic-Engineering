import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'neutram-studio',

  projectId: '8y0fvn0w',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemas'

// const config = defineConfig({
//   projectId: "8y0fvn0w",
//   dataset: "production",
//   title: "Neutram Geomatic Engineering Website",
//   apiVersion: "2023-03-09",
//   // basePath: "/adminisadmin",
//   plugins: [deskTool(), visionTool],
//   schema: { types: schemaTypes }
// })

// export default config
