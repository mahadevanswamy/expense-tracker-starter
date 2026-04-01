# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a React 19 + Vite single-page app with no routing, no state management library, and no backend — all state lives in `App.jsx`.

**`src/App.jsx`** — the entire application. Contains:
- `transactions` state: array of `{ id, description, amount, type, category, date }`. Note: `amount` is stored as a **string**, not a number — this is an intentional bug causing incorrect totals (string concatenation instead of addition).
- `totalIncome` / `totalExpenses` / `balance`: derived from transactions via `.reduce()`
- `filteredTransactions`: derived from transactions filtered by `filterType` and `filterCategory`
- Form state (`description`, `amount`, `type`, `category`) for adding new transactions
- `handleSubmit`: adds a new transaction; does not parse `amount` to a number

**`src/App.css`** — all styles. CSS classes `income-amount`, `expense-amount`, `balance-amount` are shared between the summary cards and table rows.

**Known issues in the starter code:**
- `amount` is stored as a string, so totals are wrong (string concat)
- "Freelance Work" is categorized as type `"expense"` but category `"salary"` — inconsistent seed data
- No delete functionality
- Minimal styling
