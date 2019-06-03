# 클라이언트에서 사용 시

1. protoDescriptor\[package\]\[service\]는 service constructor입니다.
1. service constructor에 address, grpc credential을 넣으면 해당 서비스를 사용할 수 있는 클라이언트가 생성됩니다.

example

```javascript
var fooBarProtoDescriptor = LoadProto('foobar.proto')
  , { fooPackage } = fooBarProtoDescriptor
  , { barService } = fooPackage
  , fooBarClient = new barService('localhost:22222', grpc.credentials.createInsecure())
  // 예제라서 기본 credential을 사용 할 뿐, 해당 grpc 서비스에서 사용된 credential 정보를 동일하게 사용해야 합니다.

fooBarClient.func({
  foo: 123,
  bar: 456,
}, (err, response) => {
  console.log(err, response)
})
```
