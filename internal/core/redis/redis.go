package cache

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/go-redis/redis/v8"
)

type RedisClient struct {
	*redis.Client
}

func NewRedisClient(url string) *RedisClient {
	fmt.Println("Connecting to Redis...")
	redisClient := redis.NewClient(&redis.Options{
		Addr: url,
		OnConnect: func(ctx context.Context, cn *redis.Conn) error {
			fmt.Println("Connected to Redis successfully!!!")
			return nil
		},
	})
	_, err := redisClient.Ping(context.Background()).Result()
	if err != nil {
		fmt.Println("Error connecting to Redis: ", err)
		return nil
	}
	return &RedisClient{redisClient}
}

func (client *RedisClient) CacheData(key string, value interface{}, ttl time.Duration) error {
	ctx := context.Background()
	err := client.Set(ctx, key, value, ttl).Err()
	if err != nil {
		return err
	}
	return nil
}

func (client *RedisClient) GetCachedData(key string) (string, error) {
	ctx := context.Background()
	val, err := client.Get(ctx, key).Result()
	if err != nil {
		return "", err
	}
	return val, nil
}

func (client *RedisClient) ComputeCacheKey(context, id, object string) string {
	return strings.Join([]string{context, object, id}, ":")
}

func (client *RedisClient) PublishMessageToRedisChannel(channel string, message []byte) error {
	fmt.Println("Publishing message to Redis channel...")
	ctx := context.Background()
	err := client.Publish(ctx, channel, message).Err()
	if err != nil {
		fmt.Println("Error publishing message to Redis channel: ", err.Error())
		return err
	}
	fmt.Println("Message published to Redis channel successfully!!!")
	return nil
}
