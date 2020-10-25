module.exports = {
    definition: `
    `,
    query: `
      articleBySlug(slug: String): Article
    `,
    resolver: {
      Query: {
        article: {
          description: 'Return a single article'
        },
        articleBySlug: {
          description: 'Return an article by slug value.',
          resolver: 'application::article.article.findBySlug',
        },
      },
    },
  };
  