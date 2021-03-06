'use strict'

const geoip = require('geo-from-ip')

// for debugging
require('@google/cloud-debug').start()

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.geofromip = function geofromip (req, res) {
  res.set('Access-Control-Allow-Origin', 'https://happydemogods.vikramtiwari.com')
  res.send(geoip.allData(req.ip))
}
