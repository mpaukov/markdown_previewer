import path from "../data/editor.txt";

export const readFile = async () => {
  const text = await fetch(path)
    .then((res) => res.text())
    .then((t) => t);

  return text;
};
