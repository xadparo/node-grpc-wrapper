var grpc = require('grpc')
  , protoLoader = require('@grpc/proto-loader')

function LoadProto(option) {
  var { protoPath } = option

  if(typeof option === 'string') {
    protoPath = option
  }

  if(typeof protoPath !== 'string') {
    return new Error('require option.protoPath:string')
  }

  try {
    var protoPackageDefinition = protoLoader.loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    })

    var protoDescriptor = grpc.loadPackageDefinition(protoPackageDefinition)

    return protoDescriptor
  } catch(err) {
    return err
  }
}

module.exports = LoadProto
