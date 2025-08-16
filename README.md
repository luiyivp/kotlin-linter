# Kotlin Linter (Ktlint) action

This action installs Ktlint, adds it to the PATH and runs ktlint (check).

## Inputs

### `version`

The Ktlint version to install.

## Example usage

```yaml
- name: Run Ktlint
  uses: luiyivp/kotlin-linter@v1
  with:
    version: '1.7.1'
```
