const settings = {
  name: "fortstudio",
  state: {
    frontity: {
      url: "https://fortstudio.com/",
      title: "Fort Studio",
      description: "FORT is a creative design studio based in Columbus, Ohio. We specialize in brand strategy, identity, graphic design, web design and web development."
    }
  },
  packages: [
     
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["What We Do", "/what-we-do/"],
            ["Who We Are", "/who-we-are/"],
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
    "@frontity/html2react",
    "frontity-contact-form-7",
  ]
};

export default settings;
