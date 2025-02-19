import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ecommerce-cms',

  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,

  basePath: "/studio",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
