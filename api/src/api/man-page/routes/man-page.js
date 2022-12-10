'use strict';

/**
 * man-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::man-page.man-page');
