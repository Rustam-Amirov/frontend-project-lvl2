### Hexlet tests and linter status:
[![Actions Status](https://github.com/Rustam-Amirov/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Rustam-Amirov/frontend-project-lvl2/actions)
[![App-CI](https://github.com/Rustam-Amirov/frontend-project-lvl2/workflows/App-CI/badge.svg)](https://github.com/github/docs/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/d4a3b1d9fa0de5797140/maintainability)](https://codeclimate.com/github/Rustam-Amirov/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d4a3b1d9fa0de5797140/test_coverage)](https://codeclimate.com/github/Rustam-Amirov/frontend-project-lvl2/test_coverage)

<h1>Gendiff</h1>
<h2>This is a tutorial project that implements a file comparison utility.</h2>
<h3>Type for help.</h3><pre>gendiff -h</pre>
<pre>
Generate diff

Usage:
  gendiff (-h|--help)
  gendiff (-v|--version)
  gendiff [--format &lt;fmt&gt;] &lt;firstFile&gt; &lt;secondFile&gt;

Options:
  -h --help                     Show this screen
  -v --version                  Show version
  --format &lt;fmt&gt;                Report format [default: pretty]
</pre>

<h3>Also this utility can be used as a function. Example:</h3>
<pre>genDiff('before.json', 'after.json', 'plain);</pre>
<p>before.json after.json paths to files. format - output format.
<p>You can use absolute and relative file paths to compare files</p>

<a href="https://asciinema.org/a/334526?autoplay=1" target="_blank"><img src="https://asciinema.org/a/334526.svg" width="700"/></a>
<p>The utility is also capable of comparing files with a nested structure.</p>
<a href="https://asciinema.org/a/Q9BBEpxupk8ahrhMqUe33GcHY" target="_blank"><img src="https://asciinema.org/a/Q9BBEpxupk8ahrhMqUe33GcHY.svg" width= "700"/></a>
<p>The utility is capable of displaying the result in three versions</p>
<div>-Plian</div>
<div>-Pretty  [default]</div>
<div>-JSON</div>
</br>
<p>JSON:</p>
<a href="https://asciinema.org/a/1StSb2hC6UhjmPfWBMkEQw7F5" target="_blank"><img src="https://asciinema.org/a/1StSb2hC6UhjmPfWBMkEQw7F5.svg" width = "700"/></a>
<p>Plain:</p>
<a href="https://asciinema.org/a/uXp5S8k9OVwTrz9B4RQHPiaUz" target="_blank"><img src="https://asciinema.org/a/uXp5S8k9OVwTrz9B4RQHPiaUz.svg" width = "700"/></a>
<p>Supported file formats for comparison: .json .yaml .yml</p>
