module.exports = {
  siteMetadata: {
    title: 'Bradley Walden',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-postcss-sass",
      options: {
        postCssPlugins: [require('autoprefixer')()]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora\:400,700`,
          `Montserrat\:400,700,900`
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ],
}
