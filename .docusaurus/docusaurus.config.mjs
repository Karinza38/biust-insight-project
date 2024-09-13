/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "B    I    P",
  "tagline": "biust   insight   project",
  "favicon": "/img/social-card.png",
  "url": "https://the-dezeray.github.io",
  "baseUrl": "/biust-insight-project/",
  "organizationName": "the-dezeray",
  "projectName": "biust-insight-project",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "gtag": {
          "trackingID": "GTM-PHDC9B7C",
          "anonymizeIP": false
        },
        "googleTagManager": {
          "containerId": "GTM-PHDC9B7C"
        },
        "docs": {
          "sidebarPath": "./sidebars.js",
          "editUrl": "https://github.com/facebook/do                                                                                                                                   cusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "blog": {
          "showReadingTime": true,
          "feedOptions": {
            "type": [
              "rss",
              "atom"
            ],
            "xslt": true
          },
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          "onInlineTags": "warn",
          "onInlineAuthors": "warn",
          "onUntruncatedBlogPosts": "warn"
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "image": "img/logo.svg",
    "navbar": {
      "hideOnScroll": true,
      "title": "BIP",
      "logo": {
        "alt": "site logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "right",
          "label": "The Archive"
        },
        {
          "label": "About",
          "position": "right",
          "type": "dropdown",
          "items": [
            {
              "label": "Me",
              "to": "/docs/about-me"
            },
            {
              "label": "The Project",
              "to": "/docs/why-project"
            }
          ]
        },
        {
          "label": "Portals",
          "position": "left",
          "type": "dropdown",
          "items": [
            {
              "label": "Blackboard",
              "href": "https://biust.blackboard.com/"
            },
            {
              "label": "Basis",
              "href": "https://portal.biust.ac.bw/"
            }
          ]
        },
        {
          "to": "/docs/photo-gallery/daily",
          "label": "Photo Gallery",
          "position": "right"
        },
        {
          "to": "/docs/challanges/main",
          "label": "Contritbue ",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Info",
          "items": [
            {
              "label": "Project stats",
              "to": "/docs/project-stats"
            },
            {
              "label": "About the  Project",
              "to": "/docs/why-project"
            },
            {
              "label": "developer ",
              "to": "/docs/about-me"
            }
          ]
        },
        {
          "title": "Contribute / Join",
          "items": [
            {
              "label": "Github",
              "to": "https://github.com/the-dezeray/biust-insight-project"
            },
            {
              "label": "Contributers",
              "href": "https://github.com/the-dezeray/biust-insight-project/tree/main"
            },
            {
              "label": "Documentaion",
              "href": "https://github.com/the-dezeray/biust-insight-project/tree/main"
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Terms",
              "href": "/docs/terms"
            },
            {
              "label": "Cookie Policy",
              "href": "/docs/cookie-policy"
            }
          ]
        }
      ],
      "copyright": " <br/> <br> <br>The content provided in this archive is for educational use only. While I encourage collaboration and resource sharing, I will   not  beresponsible for any instances of plagiarism, loss of marks, or other academic consequences that may arise from the use of this material. Users are advised to adhere to their institution’s academic integrity policies when utilizing these resources. Thank you for your understanding.<br/> Desiree"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "future": {
    "experimental_storage": {
      "type": "localStorage",
      "namespace": false
    },
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
};