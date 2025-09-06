#!/usr/bin/env bash
set -euo pipefail

echo "=== Nebula Codespace postCreate script ==="

# Workdir: try common Codespaces workspace envs
WORKDIR="${GITHUB_WORKSPACE:-/workspaces/nebula-sports-platform}"
echo "Working directory: $WORKDIR"
cd "$WORKDIR" || { echo "Workspace folder not found: $WORKDIR"; exit 1; }

# Helper to install npm deps with fallback
install_deps() {
  local dir="$1"
  if [ -d "$dir" ]; then
    echo
    echo "-> Installing dependencies in $dir"
    cd "$dir"
    # Prefer npm; if peer dep issues occur, retry with legacy-peer-deps
    if ! npm ci --omit=dev; then
      echo "npm ci failed, trying npm install --legacy-peer-deps"
      npm install --legacy-peer-deps
    fi
    cd "$WORKDIR"
  else
    echo "Directory $dir not found, skipping."
  fi
}

# Install nebula-desktop dependencies
install_deps "nebula-desktop"

# Install nebula-mobile-app dependencies
install_deps "nebula-mobile-app"

# Optional: install expo-cli globally for convenience (npx works too)
if ! command -v expo >/dev/null 2>&1; then
  echo
  echo "-> Installing expo-cli globally (for convenience). You can skip this; npx expo start works too."
  npm install -g expo-cli || echo "Global expo install failed; will rely on npx."
fi

# Make sure python is available (for static server)
if command -v python3 >/dev/null 2>&1; then
  echo "Python3 found: $(python3 --version)"
else
  echo "Warning: python3 not found in container. Static server will not work without python3."
fi

# Fix permissions on scripts
chmod +x .devcontainer/postCreate.sh || true

echo
echo "=== Post-create finished ==="
echo "Next steps:"
echo " - To run static site: python3 -m http.server 8000  (open http://localhost:8000/index.html)"
echo " - To run desktop dev server: cd nebula-desktop && npm run dev (Vite usually on http://localhost:5173)"
echo " - To run mobile (Expo): cd nebula-mobile-app && npx expo start (scan QR with Expo Go)"
echo
