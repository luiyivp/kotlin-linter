# Kotlin Linter (Ktlint) Action

This action installs [Ktlint](https://pinterest.github.io/ktlint/latest/), adds it to the `PATH` and runs ktlint (check).

## Inputs

### `version`

The Ktlint [version](https://github.com/pinterest/ktlint/tags) to install.

## Example usage

```yaml
- name: Run Ktlint
  uses: luiyivp/kotlin-linter@v1
  with:
    version: '1.7.1'
```
