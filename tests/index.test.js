import { default as userEvent } from "@testing-library/user-event";
import pickFile from "../src";

test("can use picker", async () => {
  const user = userEvent.setup();

  /** @type {File|null} */
  let pickedFile = null;

  const button = document.createElement("button");
  button.textContent = "Pick file";
  button.onclick = async () => {
    pickedFile = await pickFile();
  };
  document.body.appendChild(button);

  button.click();

  expect(document.getElementsByTagName("input")).toHaveLength(1);
  expect(document.getElementsByTagName("input")[0]).not.toBeVisible();

  await user.upload(
    document.getElementsByTagName("input")[0],
    new File([""], "file.txt", { type: "text/plain" })
  );

  expect(pickedFile).toBeInstanceOf(File); // @ts-ignore
  expect(pickedFile.name).toBe("file.txt");

  expect(document.getElementsByTagName("input")).toHaveLength(0);
});
