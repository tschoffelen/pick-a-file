/**
 * Present the file picker dialog to the user.
 *
 * Returns a promise that resolves to the selected file(s).
 *
 * @typedef {Object} PickFileOptions
 * @property {boolean} [multiple=false] - Allow multiple file selection.
 * @property {string} [accept=''] - Comma-separated list of accepted file extensions or MIME types.
 *
 * @param {PickFileOptions} options
 * @returns {Promise<File|FileList|null>}
 */
const pickFile = ({ multiple = false, accept = "" }) => {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.onchange = (e) => {
      if (multiple) {
        return resolve(input.files);
      }
      return resolve((input.files && input.files[0]) || null);
    };
    input.click();
  });
};

module.exports = pickFile;
