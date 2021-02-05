# Filedown

> A Markdown-HTML file converter library based on Showdown and Chalk written in JavaScript.

---

# Highlights

- Convert Markdown or HTML with less codes.
- Use variables `mh` and `hm` to mark what kind of file will be output.

# Install

```shell
$ npm install @mapmaths/filedown
```

# Usage

Use the `make()` function to convert.

```javascript
const fd = require('@mapmaths/filedown'),
      mh = fd.mh,
      hm = fd.hm;

fd.make(mh, 'markdown.md', 'html.htm');
//Convert `markdown.md` into `html.htm`

fd.make(hm, 'index.html', 'md.markdown');
//Convert `index.html` into `md.markdown`
```

# Special thanks

@gitignore-nmp (or @ljy-002 on GitHub) helps improve this lib.✨

# Changelog

### Version 1.0

#### V1.0.2

**Jan 16, 2021**

1. Improved document.

#### V1.0.1

**Jan 16, 2021**

1. Change `[variable]m, h` into`[variable]mh, hm`.

#### V1.0.0

**Jan 16, 2021**

1. Made this project with `[function]make`, `[variable]m, h`.