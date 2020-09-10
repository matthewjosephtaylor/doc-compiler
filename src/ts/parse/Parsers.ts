import { monad } from "@mjtdev/monad/Monad";
import { Reader, reader } from "@mjtdev/monad/Monads";
import { Parser } from "@mjtdev/parse/Parser";

export const charParser: Parser<string, number[]> = reader((text) => {
  return text.split("").map((c) => c.charCodeAt(0));
});

export const pickCharParser: (index: number) => Parser<number[], number> = (
  index
) =>
  reader((text) => {
    return text[index];
  });

// export const strParser: Parser<string, Reader<number, number>> = (
//   text: string
// ) => {
//   return reader((position: number) => {
//     return text.charCodeAt(position);
//   });
// };
