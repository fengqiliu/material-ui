# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See [AGENTS.md](./AGENTS.md) for comprehensive development documentation.

## Quick Reference

- **Package manager**: pnpm only (yarn/npm will fail)
- **Monorepo**: Lerna + Nx with packages in `./packages/` and `./packages-internal/`
- **Start dev server**: `pnpm docs:dev`

## Key Packages

- `@mui/material` - Core components
- `@mui/system` - Styling system (sx prop, styled, theme)
- `@mui/lab` - Experimental components
- `@mui/icons-material` - Material Design icons
- `@mui/utils` - Internal utilities
- `docs` - Documentation site (Next.js)

## Common Commands

```bash
pnpm docs:dev              # Start docs dev server
pnpm test:unit             # Run unit tests
pnpm test:unit Component   # Run tests for specific component
pnpm release:build         # Build all packages
pnpm prettier              # Format code
pnpm eslint                # Lint code
pnpm typescript            # Type check
```

## Before Submitting PR

1. `pnpm prettier` - Format
2. `pnpm eslint` - Lint
3. `pnpm typescript` - Type check
4. `pnpm test:unit` - Tests pass
5. If API changed: `pnpm proptypes && pnpm docs:api`
