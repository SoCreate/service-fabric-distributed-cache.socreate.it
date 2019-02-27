###### Distributed Cache Store
```csharp
public class DistributedCacheStore : DistributedCacheStoreService
{
    public DistributedCacheStore(StatefulServiceContext context) : base(context)
    { }

    protected override int MaxCacheSizeInMegabytes =>; 1000;
}
```
