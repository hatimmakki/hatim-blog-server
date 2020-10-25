'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async findBySlug(ctx) {
        const { _slug } = ctx.params;
        console.log('slug', _slug);
        console.log('ctx.params', ctx.params);
        const entity = await strapi.services.article.findOne({ slug: _slug });
        return sanitizeEntity(entity, { model: strapi.models.article });
      },
    

};
