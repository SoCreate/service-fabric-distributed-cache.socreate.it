###### Example Configuration Settings
```csharp
public class Startup
{
    static readonly Guid CacheStoreId = new Guid("ec4ae77e-f015-4fe1-8735-5ae7a77385ef");
    ...
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddDistributedServiceFabricCache(options => {
            options.CacheStoreId = CacheStoreId;
            options.CacheStoreServiceUri = new Uri("fabric:/ServiceFabricDistributedCache/DistributedCacheStore");
        });
    }
    ...
}
```
