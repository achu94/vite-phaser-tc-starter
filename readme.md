# Phaser 3 + TypeScript + Vite.js Template
> Make Phaser 3 games with TypeScript and modern frontend tooling.

![License](https://img.shields.io/badge/license-MIT-green)

This is a TypeScript specific fork of [phaser3-vite-template](https://github.com/ourcade/phaser3-vite-template).

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── public
    ├── src
    │   ├── HelloWorldScene.ts
    │   ├── main.ts
	├── index.html
    ├── package.json
```

TypeScript files are intended for the `src` folder. `main.ts` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project.

There is an example `HelloWorldScene.ts` file that can be placed inside a `scenes` folder to organize by type or elsewhere to organize by function. For example, you can keep all files specific to the HelloWorld scene in a `hello-world` folder.

It is all up to you!

## Static Assets

Any static assets like images or audio files should be placed in the `public` folder. It'll then be served from the root. For example: http://localhost:8000/images/my-image.png

Example `public` structure:

```
    public
    ├── images
    │   ├── my-image.png
    ├── music
    │   ├── ...
    ├── sfx
    │   ├── ...
```

They can then be loaded by Phaser with `this.image.load('my-image', 'images/my-image.png')`.

# TypeScript ESLint

This template uses a basic `typescript-eslint` set up for code linting.

It does not aim to be opinionated.

[See here for rules to turn on or off](https://eslint.org/docs/rules/).

## Dev Server Port

You can change the dev server's port number by modifying the `vite.config.ts` file. Look for the `server` section:

```js
{
	// ...
	server: { host: '0.0.0.0', port: 8000 },
}
```

Change 8000 to whatever you want.

## License

[MIT License](https://github.com/ourcade/phaser3-vite-template/blob/master/LICENSE)
