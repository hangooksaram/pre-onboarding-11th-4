const EXPIRES_IN = 10000;

export const cacheWrapper = (func: Function) => {
  let cache = new Map();

  return function (dataType: string) {
    const storedTime = new Date();

    if (cache.has(dataType)) {
      const leftTimeToExpired =
        new Date().getTime() - cache.get(dataType).storedTime;
      const expired = leftTimeToExpired > EXPIRES_IN;
      const cachedData = cache.get(dataType).data;

      // 캐시 만료까지 남은 시간 확인
      if ((EXPIRES_IN - leftTimeToExpired) / 1000 > 0) {
        console.log(
          `left time to be expired ${(EXPIRES_IN - leftTimeToExpired) / 1000}s`
        );
      } else
        console.log("cache data is expired. next request will get api result.");

      if (expired) cache.delete(dataType);
      return cachedData;
    } else {
      const data = func(dataType);
      const cacheItem = {
        data,
        storedTime,
      };
      cache.set(dataType, cacheItem);

      return data;
    }
  };
};

export default cacheWrapper;
