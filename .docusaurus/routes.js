import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/DocusaurusTest/__docusaurus/debug',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug', '7e5'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/config',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/config', '2c5'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/content',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/content', 'aba'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/globalData',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/globalData', 'd7f'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/metadata',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/metadata', 'ead'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/registry',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/registry', 'baa'),
    exact: true
  },
  {
    path: '/DocusaurusTest/__docusaurus/debug/routes',
    component: ComponentCreator('/DocusaurusTest/__docusaurus/debug/routes', 'd6d'),
    exact: true
  },
  {
    path: '/DocusaurusTest/markdown-page',
    component: ComponentCreator('/DocusaurusTest/markdown-page', '5dd'),
    exact: true
  },
  {
    path: '/DocusaurusTest/docs',
    component: ComponentCreator('/DocusaurusTest/docs', 'ba0'),
    routes: [
      {
        path: '/DocusaurusTest/docs',
        component: ComponentCreator('/DocusaurusTest/docs', '6da'),
        routes: [
          {
            path: '/DocusaurusTest/docs',
            component: ComponentCreator('/DocusaurusTest/docs', 'c8f'),
            routes: [
              {
                path: '/DocusaurusTest/docs/category/tutorial---basics',
                component: ComponentCreator('/DocusaurusTest/docs/category/tutorial---basics', 'c4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/category/tutorial---extras',
                component: ComponentCreator('/DocusaurusTest/docs/category/tutorial---extras', 'e7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/fizzbuzz',
                component: ComponentCreator('/DocusaurusTest/docs/fizzbuzz', '806'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/intro',
                component: ComponentCreator('/DocusaurusTest/docs/intro', '749'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/congratulations', '4a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/create-a-blog-post', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/create-a-document', '2b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/create-a-page', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/deploy-your-site', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-basics/markdown-features', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-extras/manage-docs-versions', '4cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/DocusaurusTest/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/DocusaurusTest/docs/tutorial-extras/translate-your-site', 'a9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/DocusaurusTest/',
    component: ComponentCreator('/DocusaurusTest/', '08e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
