'use strict';

/**
 * main-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-topic.main-topic');
