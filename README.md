# typescript-node

This project allows you to write TypeScript scripts, compile them to JavaScript, and run them with Node.

## How to build 

```
npm run build
```
## How to use

```
npm start
```

## Known issues

Getting other qtools pages to work which import other modules, e.g. `const mkdirp = require('mkdirp');` has not been successful. There is always some conflict between using the **CommonJS require** approach and the **ES6 import/export** approach, nor could I get this to work by tweaking various settings e.g.:

- the `--target ES6` in `node_modules/.bin/tsc --target ES6 src/main.ts`
- the `"type": "module",` in `package.json`
- adding a `tsconfig.json` file and tweaking the settings there, here is an example that works in my create-react-app with TypeScript (`https://github.com/edwardtanguay/onespace`):

```
{
	"compilerOptions": {
		"target": "es5",
		"lib": [
			"dom",
			"dom.iterable",
			"esnext"
		],
		"forceConsistentCasingInFileNames": true,
		"noImplicitReturns": true,
		"strict": true,
		"noUnusedLocals": true,
		"allowJs": true,
		"skipLibCheck": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react",
		"baseUrl": "src",
		"module": "esnext",
		"downlevelIteration": true
	},
	"include": [
		"src",
		"src/datapod/qtools/qstr.ts",
		"dev/scripts/dpod_publish_dpodreactcode_version.ts"
	]
}
```