
# The Documentation _IS_ The Code

I'm a [_senior_ (aka old, been in the game for > 30 years) software developer](https://www.linkedin.com/in/matthewjosephtaylor) moving from the Java ecosystem to the Javascript / Typescript ecosystem.

There have been frustrations and bumps along the road, but in general coding in Typescript has been pure joy, and I _highly_ recommend it to anyone thinking of working with it.

Recently, when I've reached for something in the Javascript / Typescript ecosystem it's there (that wasn't always the case years ago...I remember the dark times...). The hard part now is making a choice between one of the _several_ wonderful options to choose from (good problems to have).

Unfortunately, I have now hit my first major road-block :(

There is currently no documentation language / generator that I like in the Javascript / Typescript ecosystem.

That isn't to say that other language ecosystems have this solved. And that IMHO is part of the problem. There is no decent _general_ solution for producing documentation from source code that I am aware of. 

Java has had [Javadoc](https://en.wikipedia.org/wiki/Javadoc) for a _generation_, and has not really moved much beyond that.

C/C++ has [Doxygen](https://www.doxygen.nl) 

And there are a [plethora](https://en.wikipedia.org/wiki/Comparison_of_documentation_generators) of documentation generators for various languages.

[ApiDoc](https://apidocjs.com/) along with [JSDoc](https://jsdoc.app/) and language specific extensions like [TSDoc](https://github.com/microsoft/tsdoc) are the closest common _language_ for documentation I'm aware of (all of course stemming from Javadoc).

[OpenAPI (swagger)](https://github.com/OAI/OpenAPI-Specification) is the dominant machine-readable intermediate form for documentation.

Here a are a few documentation generators for Javascript / Typescript I've looked into:

- [Docz](https://github.com/doczjs/docz)
- [Dox](https://github.com/tj/dox)
- [Dcumentationjs](https://github.com/documentationjs/documentation)
- [Docusaurus](https://v2.docusaurus.io/)
- [TypeDoc](https://typedoc.org/)


## START OPINIONATED RANT
All of these generators have problems that make me not want to use them. These problems stem from one cause:

> None of the generators want to share a common intermediate form, and so are to varying degrees, doomed monoliths, wanting to solve _all_ the problems instead of solving tractable single small problems.

My one lesson from decades of experience: Composition is KING.

As a software developer I don't want to spend my precious time investing in a single entire vertical soup-to-nuts 'solution' to a problem. Those 'solutions' eventually become stale, or _worse_ become a sort of prison, limiting my ability to create, and my time is wasted.

Consumers look for 'entire' solutions.

As a _developer_ I'm looking for the _small pieces_ that I can put together to _create_ a solution. I'm a chief who takes _ingrediants_ to produce a meal, or an artist that uses _paints_ to produce a painting.

I'm a _creator_ not a _consumer_, and tools that want _me_ to use them should focus on that fact, and vie to be as small and composable as possible.

## END RANT


## How documentation _should_ work

- Developer writes 'code' _AND_ 'documentation' in same source file and directory structure
  - There is no distinction between text intended to be fed to a compiler that produces a library/executable, or a compiler that produces bundles intended for 'documentation' purposes. They are just transformations of the source code into different forms for different purposes.
- 'Documentation Parser(s) / Compiler(s)' parse source code to produce an intermediate agnostic documentation form.
  - Different parsers for each form of source code, all targeting _one_ intermediate documentation form.
- 'Documentation Assemblers' ingest the intermediate form and produce various outputs like HTML, Markdown, OpenAPI (swagger), etc...

## An emerging solution from the content side

[Unified](https://unifiedjs.com/) is a _content focused_ ecosystem that appears poised to tackle this problem from the 'opposite' (document/content creation) side. [MDX](https://mdxjs.com/) is a tentative step towards recognition of the idea that 'there is only source', without the distinction between 'content' and 'code'.

MDX and Unified is getting _close_ to the solution, but isn't there yet. The focus is _too much_ on unstructured content (for my purposes), and not enough on generating content _from_ structured text like 'source code'. I'm excited and think this project is going in a good direction (and [parts are already there](https://github.com/syntax-tree)), but it is going to take time for this to unfold.

## I can't wait

I'm working on a [project](https://github.com/matthewjosephtaylor/say-my-name) that is currently being held up due to this 'documentation' problem.

To that end I've started [yet another project](.) to solve my 'documentation problem', before I can get back to solving my other problems (I am an infinite generator of problems for myself :) ).

Wish me luck, and I'd be curious to know of how others solve the 'documentation problem' for themselves. Perhaps I've missed something obvious, or there are other resources I can use to help solve this problem.


