export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fff2e1cb3aa71148ba3f3ad',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-yg1914ai',
                  apiId: 'baa75ee1-45ef-4045-a5be-2510e0cf7b84'
                },
                {
                  buildHookId: '5fff2e1d01c26b0c47f6e6e6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4ioskuox',
                  apiId: '284f233d-edcd-4893-adcc-08fb4c798044'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/banderson12/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4ioskuox.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
