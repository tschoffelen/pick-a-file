export type PickFileOptions = {
  accept?: string;
};

interface SingleFileOptions extends PickFileOptions {
  multiple?: false;
}

interface MultiFileOptions extends PickFileOptions {
  multiple: true;
}

function pickFile(options?: SingleFileOptions): Promise<File | null>;
function pickFile(options?: MultiFileOptions): Promise<FileList | null>;

export default pickFile;
