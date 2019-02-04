const kue = require('kue')
const redisCfg = require('../../config/redis')
const jobs = require('../jobs')
const Queue = kue.createQueue({ redis: redisCfg })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

module.exports = Queue
