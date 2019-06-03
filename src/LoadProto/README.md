# LoadProto의 역할

1. protobuf file의 path를 받아서 protobuf descriptor를 반환 합니다.

### Client에서 protobuf descriptor를 사용 하는 방법

1. protoDescriptor\[package\]\[service\]는 client용 service constructor입니다.
1. service constructor에 address, grpc credential을 넣으면 client용 grpc connection이 생성됩니다.
1. service 정보에 포함 된 rpc interface가 connection에 method로 추가 되어 있습니다.

example

```javascript
var fooBarProtoDescriptor = LoadProto('foobar.proto')
  , { fooPackage } = fooBarProtoDescriptor
  , { barService } = fooPackage
  , fooBarClient = new barService('localhost:22222', grpc.credentials.createInsecure())
  // 예제라서 기본 credential을 사용 할 뿐, 해당 grpc 서비스에서 사용된 credential 정보를 동일하게 사용해야 합니다.

fooBarClient.rpc({
  foo: 123,
  bar: 456,
}, (err, response) => {
  console.log(err, response)
})
```
