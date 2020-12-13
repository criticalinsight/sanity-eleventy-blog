export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5fd5f0be2a4b8da4529d90ff',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-p2uryj8m',
                  apiId: '2d0e5ca0-884f-4757-bbaf-2d3f1a1d70a5'
                },
                {
                  buildHookId: '5fd5f0be2e31765d79613286',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-px7798qo',
                  apiId: '22d73d87-3acc-4f51-8a88-be98edfceebf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/criticalinsight/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-px7798qo.netlify.app', category: 'apps'}
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
