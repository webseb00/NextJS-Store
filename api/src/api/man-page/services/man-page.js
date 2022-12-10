'use strict';

/**
 * man-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::man-page.man-page');
