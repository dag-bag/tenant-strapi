'use strict';

/**
 * lease controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lease.lease');