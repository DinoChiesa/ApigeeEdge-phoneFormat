# Edge proxy for phoneFormat.js

This is an Apigee Edge proxy, that hosts the phoneFormat library in nodejs.

The API proxy exposes a REST api for each of the phoneFormat methods.

## Examples

countryCodeToName
```
$ curl https://deecee-test.apigee.net/e164/countryCodeToName/us
{"name":"United States"}
```

cleanPhone
```
$ curl https://deecee-test.apigee.net/e164/cleanPhone/+1-415-505-5055
{"number":"+14255055055"}
```

exampleMobileNumber
```
$ curl https://deecee-test.apigee.net/e164/exampleMobileNumber/us
{"example":"2015555555"}

$ curl https://deecee-test.apigee.net/e164/exampleMobileNumber/gb
{"example":"7400123456"}

$ curl https://deecee-test.apigee.net/e164/exampleMobileNumber/au
{"example":"412345678"}

$ curl https://deecee-test.apigee.net/e164/exampleMobileNumber/it
{"example":"3123456789"}
```


isValidNumber
```
$ curl https://deecee-test.apigee.net/e164/isValidNumber/au/+1-415-505-5055
{"valid":true}

$ curl https://deecee-test.apigee.net/e164/isValidNumber/au/415-505-5055
{"valid":false}
```

formatE164
```
curl https://deecee-test.apigee.net/e164/formatE164/it/3123456789
{"number":"+393123456789"}
```

formatNumberForMobileDialing
```
$ curl https://deecee-test.apigee.net/e164/formatNumberForMobileDialing/us/+1-415-505-5055
{"number":"+1 415-505-5055"}
```

formatLocal
```
$ curl https://deecee-test.apigee.net/e164/formatLocal/us/+393123456789
{"number":"+39 312 345 6789"}

$ curl https://deecee-test.apigee.net/e164/formatLocal/us/3123456789
{"number":"(312) 345-6789"}
```

