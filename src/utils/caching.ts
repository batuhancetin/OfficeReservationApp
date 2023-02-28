import * as redis from 'redis';
import logger from './logger';

const redisClient = redis.createClient({
    url: 'redis://redis:6380',
});

const start = async () => {
    await redisClient.connect();
}
start()

export default redisClient