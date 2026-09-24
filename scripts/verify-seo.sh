#!/usr/bin/env bash
# Verify canonical/robots/sitemap/host-redirect for danthomson.co.uk.
# Usage: BASE=https://danthomson.co.uk ./scripts/verify-seo.sh
set -eu
BASE=${BASE:-https://danthomson.co.uk}
WWW_HOST=${WWW_HOST:-www.danthomson.co.uk}

fail=0
check() { echo "-- $1 --"; }
want() {
  local label=$1 needle=$2 haystack=$3
  if printf '%s' "$haystack" | grep -qF "$needle"; then
    echo "ok: $label"
  else
    echo "FAIL: $label (missing: $needle)"
    fail=1
  fi
}

for path in "" /about /projects /books /books/immortality-in-a-digital-age /books/the-digital-afterlife /books/endless-life-after-upload /writing /speaking /investing /contact; do
  check "canonical $BASE$path"
  html=$(curl -sSL "$BASE$path")
  want "self canonical" "rel=\"canonical\" href=\"$BASE${path:-}\"" "$html"
  want "og:url" "og:url\" content=\"$BASE${path:-}\"" "$html"
done

check "robots.txt"
robots=$(curl -sSL "$BASE/robots.txt")
want "sitemap points at co.uk" "Sitemap: $BASE/sitemap.xml" "$robots"

check "sitemap.xml"
sitemap=$(curl -sSL "$BASE/sitemap.xml")
want "sitemap loc apex" "<loc>$BASE</loc>" "$sitemap"
want "sitemap has /books" "<loc>$BASE/books</loc>" "$sitemap"
want "sitemap has /writing" "<loc>$BASE/writing</loc>" "$sitemap"
want "sitemap has /investing" "<loc>$BASE/investing</loc>" "$sitemap"
if printf '%s' "$sitemap" | grep -qi 'danthomson\.ai'; then
  echo "FAIL: sitemap still references danthomson.ai"; fail=1
else
  echo "ok: sitemap has no .ai references"
fi

check "www → apex redirect preserves path/query"
loc=$(curl -sSI "https://$WWW_HOST/about?utm=test" | awk 'tolower($1)=="location:"{print $2}' | tr -d '\r\n')
code=$(curl -sSo /dev/null -w '%{http_code}' -I "https://$WWW_HOST/about?utm=test")
echo "  status: $code  location: $loc"
case "$code" in 301|308) echo "ok: permanent redirect ($code)";; *) echo "FAIL: expected 301/308, got $code"; fail=1;; esac
[ "$loc" = "$BASE/about?utm=test" ] && echo "ok: preserves path+query" || { echo "FAIL: expected $BASE/about?utm=test"; fail=1; }

check "schema types on book page"
html=$(curl -sSL "$BASE/books/immortality-in-a-digital-age")
want "Book schema" '"@type":"Book"' "$html"
want "BreadcrumbList schema" '"@type":"BreadcrumbList"' "$html"

exit $fail
