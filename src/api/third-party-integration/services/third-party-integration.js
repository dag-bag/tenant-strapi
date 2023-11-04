'use strict';

/**
 * third-party-integration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::third-party-integration.third-party-integration');