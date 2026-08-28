#!/bin/bash

set -e

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
HOOK_SOURCE="$REPO_ROOT/.githooks/pre-commit"
HOOK_TARGET="$REPO_ROOT/.git/hooks/pre-commit"

if [ ! -f "$HOOK_SOURCE" ]; then
  echo "Hook introuvable: $HOOK_SOURCE"
  exit 1
fi

mkdir -p "$(dirname "$HOOK_TARGET")"
cp "$HOOK_SOURCE" "$HOOK_TARGET"
chmod +x "$HOOK_TARGET"

echo "Hook pre-commit installé dans .git/hooks/pre-commit"