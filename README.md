# Pick file

**Ask the user to pick a file, get a promise with a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) back.**

Does this need to be a package? No, probably not, you might as well copy and paste the code from
[`index.js`](src/index.js) into your project. But I kept re-writing this little snippet, and I
thought I'd just make it easy for myself to access it.

## Installation

Run `yarn add pick-file`, or `npm i pick-file` if you insist.

## Usage

```js
const file = await pickFile({
  accept: ".csv",
});

if (file) {
  console.log(`Nice, you selected a file: ${file.name}`);
} else {
  console.log(`Boohoo, why did you not select a file?!`);
}
```

Options:

- [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept): specify a list of comma-separated file extensions or MIME types to accept.
- [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#multiple): whether to allow the user to select multiple items. When set to `true`, the promise will resolve with a [`FileList`](https://developer.mozilla.org/en-US/docs/Web/API/FileList) rather than a single `File`. Defaults to `false`.
