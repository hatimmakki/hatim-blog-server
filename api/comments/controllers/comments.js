'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {

    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
          const { data, files } = parseMultipartData(ctx);
          console.log('data', data);
          console.log('data.author', data.author);
          console.log('ctx.state.user', ctx.state.user);
          data.author = ctx.state.user.id;
          entity = await strapi.services.comments.create(data, { files });
        } else {
          ctx.request.body.author = ctx.state.user.id;
          entity = await strapi.services.comments.create(ctx.request.body);
        }
        return sanitizeEntity(entity, { model: strapi.models.comments });
      },
    
};
