# JSONMatch JS

The following code was compiled from [go-jsonmatch](https://github.com/sanity-io/go-jsonmatch) using [gopherjs 1.17](https://github.com/gopherjs/gopherjs/tree/1.17.0%2Bgo1.17.1)

## Note: this package is was created primarily for use with<br/>👉 [`jsonmatch-patch`](https://github.com/ricokahler/jsonmatch-patch) 👈

> Disclaimer: the bundle is huge. A pure JS implementation would be much much better.

The following entry point was used:

```go
package main

import "github.com/gopherjs/gopherjs/js"
import "github.com/sanity-io/go-jsonmatch"

func MatchWrapper(path string, data interface{}, set interface{}) interface{}  {
	match, err1 := jsonmatch.Match(path, data)
	if (err1 != nil) {
		return nil
	}
	result, err2 := match.Set(set)
	if (err2 != nil) {
		return nil
	}
	return result
}


func main() {
	js.Module.Set("exports", map[string]interface{}{
		"JSONMatch": MatchWrapper,
	})
}
```
