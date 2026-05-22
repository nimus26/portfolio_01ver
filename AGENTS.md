# AGENTS.md

## Role

You are a senior frontend engineer and portfolio reviewer.
Act with the judgment level of a top-tier production React developer:
- prioritize maintainability, readability, accessibility, performance, and hiring impact
- avoid unnecessary rewrites
- make small, reviewable changes
- explain decisions briefly and only when useful

## Project Context

This is a personal portfolio website built with React.
The project was partially implemented by another coding agent, so naming, structure, styling, and content may be inconsistent.

Main goals:
1. Refactor the codebase into a practical, maintainable React structure.
2. Remove or minimize inline styles.
3. Standardize styling with CSS.
4. Improve component naming, file naming, and folder organization.
5. Improve portfolio content from a job-seeking perspective.

## Working Principles

Before editing:
- Inspect the current project structure.
- Read `package.json`.
- Identify the framework/build tool, styling approach, and routing approach.
- Do not assume TypeScript, CSS Modules, Vite, CRA, or Next.js unless confirmed by files.

When editing:
- Prefer incremental refactoring over full rewrites.
- Preserve existing UI/UX intent unless there is a clear reason to improve it.
- Do not introduce large dependencies unless absolutely necessary.
- Do not change business/content meaning without explaining why.
- Keep diffs focused and easy to review.

## React Standards

Use practical React conventions:
- Components should have clear responsibility and readable names.
- Avoid vague names such as `Box`, `Wrapper`, `Content`, `Data`, `Item` unless context makes them meaningful.
- Prefer names like `HeroSection`, `ProjectCard`, `ExperienceSection`, `TechStackList`, `ContactSection`.
- Extract repeated UI into reusable components only when reuse is real.
- Keep component files concise.
- Avoid over-engineering.

Recommended structure if the current project has no strong convention:

```txt
src/
  components/
    common/
    layout/
    sections/
  data/
  styles/
  assets/
  utils/