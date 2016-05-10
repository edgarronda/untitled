/**
 * Created by test on 5/9/16.
 */
var Redis = require('ioredis');
var redis = new Redis();
redis.set('user','tester');
