#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")/" && pwd)"

pushd "$SCRIPT_DIR/app"
{
  npm install
  npm run build
}
popd

rm -rf "$SCRIPT_DIR/backend/build"
cp -a "$SCRIPT_DIR/app/build" "$SCRIPT_DIR/backend"
