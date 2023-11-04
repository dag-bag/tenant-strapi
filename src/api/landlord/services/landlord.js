'use strict';

/**
 * landlord service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::landlord.landlord');