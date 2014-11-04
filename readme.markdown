# hyperboot-example-app

This is an example app for
[hyperboot](http://hyperboot.org) that uses
[browserify](http://browserify.org) and 
[html-inline](https://npmjs.org/package/html-inline)
to generate releases.

# generating releases

Change the files in `app/`, and then generate a new release with `npm run
release` (make sure to have npm 2.0 or later):

```
$ npm run release -- -v 1.2.3 -m 'release message!'
```

once you have a release, start the server on a port:

```
$ hyperboot server -p 9000
http://localhost:9000
```

Open the web page, then click the gear in the upper right corner to view the
available versions. Note that once you start listening on a port, the content
will be cached permanently until you clear your cache.

Edit the files then `npm run release` again to publish more updates.
