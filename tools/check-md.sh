#!/usr/bin/env sh

set -euo pipefail

if find ./docs -type f -print0 | xargs -0 grep "<br>" -n --color ; then
  echo "\n\n ❌ Please use self closing <br/> tags in markdown. This breaks mdx parser.\n\n"
  exit 1
else
  echo "✅ No unclosed <br> tags found!"
  exit 0
fi