---
id: index
title: "BHDL: A Programming Language and System for making PCBs"
permalink: docs/index.html
next: add-react-to-a-website.html
redirect_from:
  - "docs/"
  - "docs/index.html"
---

This is the index page of BHDL documents.

BHDL is a programming language embedded in
[racket](https://racket-lang.org/). In addition to the language, the system
consists of a layout co-design system based on functional picture, REPL-driven
interactive development and visualization, libraries, KiCAD compatible exporter,
and placement engines including an optimization-based anlytical placer (ePlace)
and simulated annealing based detailed placer.

<!-- The online demo server can be found at https://lihebi.xyz. Currently it supports authorized users signing via GitHub OAuth. Contact us (at hebi@lihebi.com) for user account. -->

Documents:

- User Documents
  - [Installation guide](docs/install)
  - [Getting Started](docs/getting-started): this guide presents all you need to compose your circuit through an example keyboard circuit.
  - [Component Library](docs/library): the official BHDL components library, and how to create your own library easily.
  - [API reference](docs/API): the function APIs including
    - the primary API, `make-circuit`
    - three connection syntax, `*-` `*<` and `*=`
    - layout API
    - exporting API for KiCAD, PNG, PDF, BOM, etc.
- Developer Documents
  - [Advanced API reference](docs/advanced): this documents some advanced and internal APIs of BHDL.
  - [Developer and system admin guide](docs/dev)
- Example Notebooks:
  - [BHDL-Key](bhdl-test/BHDL-Key.ipynb): an ergonomic keyboard
  - [onebutton](bhdl-test/onebutton.ipynb): a pushbutton board: https://github.com/forrestbao/onebutton
  - [Arduino Spreadboard](bhdl-test/spreadboard.ipynb): an multi-dock for different form-factor Arduinos
