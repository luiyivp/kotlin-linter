# Kotlin Linter (Ktlint) action

This action installs Ktlint, adds it to the PATH and runs ktlint (check).

## Inputs

### `version`

The Ktlint version to install.

## Example usage

```yaml
- name: Run Ktlint
  uses: ./.github/actions/kotlin-linter
  with:
    version: '1.7.1'
```
