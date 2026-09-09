# Data

Payloads in this directory are ignored by default. Commit this guide and a `manifest.md` when data arrives. Explicitly allowlist only sanitized fixtures intended for sharing.

For each input, record its source or retrieval method, acquisition date, local/storage path, version or checksum, sensitivity/access constraints, and relevant schema, units, and grain. Do not record secrets or credential-bearing URLs.

Create `raw/` for immutable acquired inputs and `derived/` for reproducible transformations when needed. Record the transformation command and source version. Other agents must be able to tell what data is available, how to retrieve it, and which conclusions it supports even when payloads cannot be committed.
