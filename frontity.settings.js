const settings = {
  name: "fortstudio",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Fort Studio",
      description: "Wordpress Install with React"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["What We Do", "/what-we-do/"],
            ["Who We Are", "/who-we-are/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://fortstudio2019.wpengine.com/wp-json",
          homepage: "/home-page",
          postTypes: [
            {
              type: "clients",
              endpoint: "clients"              
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
