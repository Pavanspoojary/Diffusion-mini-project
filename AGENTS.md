# Project Guidelines

## Git Collaboration & Branching Strategy
- **Never push to `main`**: The project lead/designer maintains `main`. All our work happens exclusively on feature/sub-branches. Under no circumstances run `git push origin main`.
- **Sync before starting tasks**: Always fetch remote updates (`git fetch origin`) prior to beginning any implementation.
- **Push target**: Commit strictly to the active feature branch.
- **Push confirmation required**: Always ask the user for confirmation ("Should I push to the sub-branch?") before running `git push`. Never push autonomously without explicit user approval.
