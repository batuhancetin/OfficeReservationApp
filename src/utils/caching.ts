import * as redis from 'redis';
import logger from './logger';

const redisClient = redis.createClient({
    url: 'redis://redis:6379',
    socket: {
        connectTimeout: 50000
    }
});

const start = async () => {
    await redisClient.connect();
}
start()

export default redisClient