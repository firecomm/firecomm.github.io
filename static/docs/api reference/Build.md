# firecomm.build()

```javascript
const { build } = require( 'firecomm' );
const proto_path = require( '../some/proto/path' );
const package = build( proto_path, { bytes: String } );
module.exports = package;
```

Build step function for compiling the `proto` into JavaScript.

## firecomm.build(proto_path, configObject)

parameters:

| Name         | Type/Properties | Config Values    | Description                                                                                                    |
| ------------ | --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| proto_path   | String          |                  | Absolute path to the `.proto` file to be compiled into JavaScript                                             |
| configObject | Object          |                  | *Optional* For configuring compilation. Takes up to nine optional properties                                  |
|              | keepCase        | boolean          | allows RPC methods to have strict camelCasing or PascalCasing within the compiled `package`.                  |
|              | longs           | String or Number | `int64`s, `uint64`s, `sint64`s, and `fixed64`s will be coerced into a `String` or a `Number`.                 |
|              | enum            | String           | Java-like `enumerable` will be accessible from an Integer or from the Enumerable option written as a `String` |
|              | bytes           | String or Array  | gRPC `byteStrings` will be coerced into a `String` or an `Array`.                                             |
|              | defaults        | boolean          | allows the setting of default values for `message` types.                                                     |
|              | arrays          | boolean          | allows the coercion of `repeated` `message` types into `Array`s.                                              |
|              | objects         | boolean          | allows the coercion of nested `message` types into `Object`s.                                                 |
|              | oneofs          | boolean          | allows the setting of unique `message` types.                                                                 |

returns `Package`