# 클라이언트에서 사용 시

1. protoDescriptor\[package\]\[service\]는 service constructor입니다.
1. service constructor에 address, grpc credential을 넣으면 해당 서비스를 사용할 수 있는 클라이언트가 생성됩니다.

example

```javascript
var protoDescriptor = LoadProto('file.proto')
  , { fooPackage } = protoDescriptor
  , { barService } = fooPackage
  , fooBarClient = new barService('localhost:22222', grpc.credentials.createInsecure())

fooBarClient.func({
  foo: 123,
  bar: 456,
}, (err, response) => {
  console.log(err, response)
})
```
