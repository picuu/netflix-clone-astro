import type { Configuration } from 'lint-staged'

const config: Configuration = {
  '*.astro': ['astro check'],
  '*': ['biome check --no-errors-on-unmatched --files-ignore-unknown=true']
}

export default config
