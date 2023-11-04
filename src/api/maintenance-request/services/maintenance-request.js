'use strict';

/**
 * maintenance-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-request.maintenance-request');