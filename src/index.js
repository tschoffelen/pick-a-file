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
const pickFile = ({ multiple = false, accept = "" } = {}) => {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.style.display = "none";
    input.onchange = () => {
      /** @type {File|FileList|null} */
      let result = input.files;
      if (!multiple) {
        result = (input.files && input.files[0]) || null;
      }

      document.body.removeChild(input);

      return resolve(result);
    };
    document.body.appendChild(input);
    input.click();
  });
};

export default pickFile;
