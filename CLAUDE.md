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

This is a React 19 + Vite single-page app with no routing, no state management library, and no backend.

**Component tree:**
```
App
├── Summary
├── TransactionForm
└── TransactionList
```

**`src/App.jsx`** — holds `transactions` state (array of `{ id, description, amount, type, category, date }`) and passes it down. `amount` is a number. Passes `onAdd` callback to `TransactionForm`.

**`src/Summary.jsx`** — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` internally via `.reduce()`.

**`src/TransactionForm.jsx`** — owns its own form state (`description`, `amount`, `type`, `category`). Calls `onAdd(transaction)` prop on submit and resets fields.

**`src/TransactionList.jsx`** — receives `transactions`, owns its own filter state (`filterType`, `filterCategory`). The `categories` constant is duplicated here and in `TransactionForm`.

**`src/App.css`** — all styles. CSS classes `income-amount`, `expense-amount`, `balance-amount` are shared between the summary cards and table rows.

**Known issues:**
- "Freelance Work" is categorized as type `"expense"` but category `"salary"` — inconsistent seed data
- `categories` array is duplicated in `TransactionForm` and `TransactionList`
- No delete functionality
- Minimal styling
