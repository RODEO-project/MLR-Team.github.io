// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-rodeo",
              title: "RODEO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-ryder",
              title: "RYDER",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-mlr-team",
              title: "MLR Team",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-deliverables",
              title: "Deliverables",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/05/01/tabs.html";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/29/typograms.html";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/28/post-citation.html";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/code-diff.html";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/echarts.html";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/chartjs.html";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/audios.html";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/24/videos.html";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/tables.html";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/07/04/diagrams.html";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/05/22/distill.html";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/10/20/math.html";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/07/15/code.html";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/05/15/images.html";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
        
      },
    },{id: "members-catherine-achard",
          title: 'Catherine Achard',
          description: "Professor. Member of WP4, WP1.",
          section: "Members",handler: () => {
              window.location.href = "/members/achard/";
            },},{id: "members-mohamed-chetanoui",
          title: 'Mohamed Chetanoui',
          description: "Professor. Co-coordinator of WP3.",
          section: "Members",handler: () => {
              window.location.href = "/members/chetouani/";
            },},{id: "members-matthieu-cord",
          title: 'Matthieu Cord',
          description: "Professor. Member of WP1.",
          section: "Members",handler: () => {
              window.location.href = "/members/cord/";
            },},{id: "members-stéphane-doncieux",
          title: 'Stéphane Doncieux',
          description: "Professor. Co-coordinator of WP3, member of WP2.",
          section: "Members",handler: () => {
              window.location.href = "/members/doncieux/";
            },},{id: "members-patrick-gallinari",
          title: 'Patrick Gallinari',
          description: "Professor. Member of WP 2, WP3.",
          section: "Members",handler: () => {
              window.location.href = "/members/gallinari/";
            },},{id: "members-maxellende-julienne",
          title: 'Maxellende Julienne',
          description: "Research engineer. Member of WP1, WP3 and WP4.",
          section: "Members",handler: () => {
              window.location.href = "/members/julienne/";
            },},{id: "members-pascal-morin",
          title: 'Pascal Morin',
          description: "Professor. Coordinator of WP2.",
          section: "Members",handler: () => {
              window.location.href = "/members/morin/";
            },},{id: "members-nicolas-perrin-gilbert",
          title: 'Nicolas Perrin-Gilbert',
          description: "CNRS researcher. Member of WP2, WP3.",
          section: "Members",handler: () => {
              window.location.href = "/members/perrin-gilbert/";
            },},{id: "members-benjamin-piwowarski",
          title: 'Benjamin Piwowarski',
          description: "CNRS research director. Member of WP1.",
          section: "Members",handler: () => {
              window.location.href = "/members/piwowarski/";
            },},{id: "members-clément-rambour",
          title: 'Clément Rambour',
          description: "Associate Professor. Member of WP1.",
          section: "Members",handler: () => {
              window.location.href = "/members/rambour/";
            },},{id: "members-olivier-sigaud",
          title: 'Olivier Sigaud',
          description: "Professor. Coordinator of WP1. Member of WP2, WP3.",
          section: "Members",handler: () => {
              window.location.href = "/members/sigaud/";
            },},{id: "members-laure-soulier",
          title: 'Laure Soulier',
          description: "Associate Professor. Member of WP1.",
          section: "Members",handler: () => {
              window.location.href = "/members/soulier/";
            },},{id: "members-brahim-tamadatze",
          title: 'Brahim Tamadatze',
          description: "CNRS research director. Co-coordinator of WP4. Member of WP1, WP2",
          section: "Members",handler: () => {
              window.location.href = "/members/tamadatze/";
            },},{id: "members-nicolas-thome",
          title: 'Nicolas Thome',
          description: "Professor at Sorbonne Université and IUF member. Prime investigator and project coordinator. Coordinator of WP0.",
          section: "Members",handler: () => {
              window.location.href = "/members/thome/";
            },},{id: "members-raphaël-vialle",
          title: 'Raphaël Vialle',
          description: "PUPH at Armand Trousseau Hospital. Prime investigator. Co-coordinator of WP4.",
          section: "Members",handler: () => {
              window.location.href = "/members/vialle/";
            },},{id: "news-rodeo-project-kick-off",
          title: 'RODEO Project kick-off',
          description: "",
          section: "News",},{id: "news-postgenai-paris-inauguration",
          title: 'PostGenAI@Paris inauguration',
          description: "",
          section: "News",},{id: "research_axes-axis-1-foundation-models-for-sequential-decision-making",
          title: 'Axis 1 - Foundation models for sequential decision making',
          description: "Coordinated by Olivier Sigaud",
          section: "Research_axes",handler: () => {
              window.location.href = "/research_axes/1_focus/";
            },},{id: "research_axes-axis-2-physics-informed-robot-controllers",
          title: 'Axis 2 - Physics-informed robot controllers',
          description: "Coordinated by Pascal Morrin and Nicolas Perrin",
          section: "Research_axes",handler: () => {
              window.location.href = "/research_axes/2_focus/";
            },},{id: "research_axes-axis-3-uncertainty-quantification-and-explainability",
          title: 'Axis 3 - Uncertainty quantification and explainability',
          description: "Coordinated by Mohammed Chetanoui and Stéphane Doncieux",
          section: "Research_axes",handler: () => {
              window.location.href = "/research_axes/3_focus/";
            },},{id: "research_axes-axis-4-ai-guided-surgical-robotics-for-spine-surgery",
          title: 'Axis 4 - AI-guided surgical robotics for spine surgery',
          description: "Coordinated by Raphaël Vialle and Brahim Tamadatze",
          section: "Research_axes",handler: () => {
              window.location.href = "/research_axes/4_focus/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
