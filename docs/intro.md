---
sidebar_position: 1
---

# Introduction

<!-- BHDL: A Programming Language and System for making PCBs -->

<!-- This is the index page of BHDL documents. -->

<!-- :::caution
This site is under construction. A release will be available soon (expected Dec. 2021).
::: -->

BHDL is a programming language embedded in
[racket](https://racket-lang.org/). In addition to the language, the system
consists of a layout co-design system based on functional picture, REPL-driven
interactive development and visualization, libraries, KiCAD compatible exporter,
and placement engines including an optimization-based anlytical placer (ePlace)
and simulated annealing based detailed placer.

<!-- The online demo server can be found at https://lihebi.xyz. Currently it supports authorized users signing via GitHub OAuth. Contact us (at hebi@lihebi.com) for user account. -->

Documents:

- User Documents
  - [Installation guide](guides/install)
  - [Getting Started](guides/getting-started): this guide presents all you need to compose your circuit through an example keyboard circuit.
  - [Component Library](reference/library): the official BHDL components library, and how to create your own library easily.
  - [API reference](reference/api): the function APIs including
    - the primary API, `make-circuit`
    - three connection syntax, `*-` `*<` and `*=`
    - layout API
    - exporting API for KiCAD, PNG, PDF, BOM, etc.
- Developer Documents
  - [Extra API reference](reference/extra): this documents some advanced and internal APIs of BHDL.
  - [System admin guide](reference/admin) for setting up jupyter hub server for your org
