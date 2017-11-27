# front-end-exercise

## Requirements

* node@5 or later

## FAQ

### Where should I put application code?

Application code is expected to be contained within `app/`.

### How to start the server?

```
/front-end-exercise$: npm run serve
```

This command will open your default browser @ `localhost:9000`.

### How to load 3rd party packages from node_modules?

The server is prepared to load both directories: `.` as well as `app/`. Once your external dependency is installed, it can be directly imported from `app/index.html` by using the following path: `/node_modules/path/to/file`.
