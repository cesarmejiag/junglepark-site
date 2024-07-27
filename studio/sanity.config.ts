import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {MdDashboard, MdLink, MdSettings} from 'react-icons/md'

const hiddenDocTypes = (listItem: any) =>
  !['page', 'route', 'site-config'].includes(listItem.getId())

export default defineConfig({
  name: 'default',
  title: 'JunglePark',

  projectId: '3o7lx1bp',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Site')
          .items([
            S.listItem()
              .title('Site config')
              .icon(MdSettings)
              .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
            S.listItem()
              .title('Routes')
              .icon(MdLink)
              .schemaType('route')
              .child(S.documentTypeList('route').title('Routes')),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
            S.listItem()
              .title('Pages')
              .icon(MdDashboard)
              .schemaType('page')
              .child(S.documentTypeList('page').title('Pages')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
