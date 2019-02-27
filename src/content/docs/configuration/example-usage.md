###### Example Usage
```csharp
[Route("api/[controller]")]
[ApiController]
public class CacheDemoController : ControllerBase
{
    private readonly IDistributedCache _distributedCache;

    public CacheDemoController(IDistributedCache distributedCache)
    {
        _distributedCache = distributedCache;
    }

    [HttpGet("SetSlidingCacheItem")]
    public async Task<ActionResult<string>> SetSlidingCacheItem()
    {
        var options = new DistributedCacheEntryOptions();
        options.SlidingExpiration = TimeSpan.FromSeconds(20);

        await _distributedCache.SetAsync("SlidingCacheItem", Encoding.UTF8.GetBytes(DateTime.Now.ToString()), options);

        return new EmptyResult();
    }

    [HttpGet("GetSlidingCacheItem")]
    public async Task<ActionResult<string>> GetSlidingCacheItem()
    {
        var bytes = await _distributedCache.GetAsync("SlidingCacheItem");

        if (bytes != null)
            return Content(Encoding.UTF8.GetString(bytes));

        return new EmptyResult();
    }
}
```
