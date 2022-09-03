const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient({ url: 'redis://default:redispw@localhost:55000' });

const GET_REDIS_ASYNC = promisify(client.get).bind(client)
const SET_REDIS_ASYNC = promisify(client.set).bind(client)

module.exports = {GET_REDIS_ASYNC, SET_REDIS_ASYNC}