'use strict';

/**
 * man-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::man-page.man-page');
