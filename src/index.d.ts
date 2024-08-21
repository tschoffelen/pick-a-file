export type PickFileOptions = {
  multiple?: boolean;
  accept?: string;
};

export type PickFileResult = File | FileList | null;

export function pickFile(options?: PickFileOptions): Promise<PickFileResult>;
