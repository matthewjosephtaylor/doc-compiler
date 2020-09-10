# Doc Compiler

> The Documentation IS the Code

Compile Documentation from Source

## Status

This project is in the 'what if' / 'play' stage of coding. The code is not useful but some ideas are being expressed / toyed with.

## Why?

There is currently no general purpose documentation language / generator that I like in the Javascript / Typescript ecosystem.

[ApiDoc](https://apidocjs.com/) along with [JSDoc](https://jsdoc.app/) and [TSDoc](https://github.com/microsoft/tsdoc) is the closest common _language_ for documentation.

[OpenAPI](https://github.com/OAI/OpenAPI-Specification) is the closest intermediate form for documentation.

There are a few documentation generators:

- [Docz](https://github.com/doczjs/docz)
- [Dox](https://github.com/tj/dox)
- [Dcumentationjs](https://github.com/documentationjs/documentation)
- [Docusaurus](https://v2.docusaurus.io/)
- [TypeDoc](https://typedoc.org/)

None of the generators want to share a common intermediate form, and so are to varying degrees doomed monoliths, wanting to solve _all_ the problems instead of solving tractable single problems.

## How documentation _should_ work

- Developer writes 'code' _AND_ 'documentation' in same source file and directory structure
  - There is no distinction between text intended to be fed to a compiler that produces an library/executable, or a compiler that produces bundles intended for 'documentation' purposes. They are just transformations of the source code into different forms for different purposes.
- Parser(s) parse source code to produce an intermediate agnostic documentation form.
  - Different parsers for each form of source code, all targeting _one_ intermediate documentation form.
- 'Documentation Compilers' ingest the intermediate form and produce various outputs like HTML, Markdown, OpenAPI (swagger), etc...

## An emerging solution from the content side

[Unified](https://unifiedjs.com/) is a _content focused_ ecosystem that appears poised to tackle this problem from the 'opposite' (document/content creation) side. [MDX](https://mdxjs.com/) is a tentative step towards recognition that 'there is only source code'.

## Next Steps

[ ] - Define documentation 'intermediate form'

[ ] - Write first parser/compiler that goes from source-code -> 'intermediate-form'

[ ] - Write first generator that goes from 'intermediate-form' -> 'useful documentation'

- [ ] - OpenAPI
- [ ] - HTML

# Blame
[Matt Taylor](https://mjt.dev)
