'use strict';

/**
 * lease service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lease.lease');