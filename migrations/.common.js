
const config = require('config')
const kue = require('kue')
const client = es.getClient(config)

let queue = kue.createQueue(Object.assign(config.kue, { redis: {
  host: "ec2-3-82-83-129.compute-1.amazonaws.com",
  port: "15089",
  auth: "p8a142f13cc2295df78ec831a7ea78cbfe62873a72698d8730ee9a959bd4784ad",
  db: 0
} }))

const esConfig = {  
  host: {
    host: config.elasticsearch.host,
    protocol: 'https',
    port: config.elasticsearch.port
  },

exports.db = client
exports.queue = queue
