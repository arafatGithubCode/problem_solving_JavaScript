const transactions = [];

// Helper function to calculate total income and expenses
const calculateTotals = () => {
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach(({ category, amount }) => {
    if (category === "income") {
      totalIncome += amount;
    } else if (category === "expense") {
      totalExpense += amount;
    }
  });

  return { totalIncome, totalExpense };
};

// Validate transaction entry
const validateTransaction = (entry) => {
  if (!entry.amount || entry.amount <= 0) {
    return {
      status: "Failed!",
      message: "Transaction amount must be greater than 0.",
      details: entry,
    };
  }

  if (entry.category !== "income" && entry.category !== "expense") {
    return {
      status: "Failed!",
      message: "Invalid category. Please select 'income' or 'expense'.",
      details: entry,
    };
  }

  return { status: "Valid" };
};

// Add a new transaction
const addTransaction = (entry) => {
  // Validate the transaction before adding
  const validationResult = validateTransaction(entry);
  if (validationResult.status !== "Valid") {
    return validationResult;
  }

  // Check if it's an expense and whether we have enough income
  const { totalIncome, totalExpense } = calculateTotals();
  if (
    entry.category === "expense" &&
    totalIncome < totalExpense + entry.amount
  ) {
    return {
      status: "Failed!",
      message: "Insufficient funds to cover this expense.",
      details: entry,
    };
  }

  // Add the transaction to the list
  transactions.push(entry);
  return {
    status: "Success!",
    message: "Transaction added successfully.",
    details: entry,
  };
};

// Generate summary of income, expenses, and balance
const summary = () => {
  const { totalIncome, totalExpense } = calculateTotals();
  const balance = totalIncome - totalExpense;

  const incomeList = transactions.filter((t) => t.category === "income");
  const expenseList = transactions.filter((t) => t.category === "expense");

  return {
    message: "Summary",
    balance: `${balance} tk`,
    totalIncome: `${totalIncome} tk`,
    totalExpense: `${totalExpense} tk`,
    incomeList,
    expenseList,
  };
};

// Sample transactions
const entry1 = { amount: 1000, description: "Tuition", category: "income" };
const entry2 = { amount: 1100, description: "Typing", category: "expense" };
const entry3 = { amount: 5800, description: "Freelance", category: "income" };
const entry4 = { amount: 180, description: "Lunch", category: "expense" };

// Add transactions and print summary
console.log(addTransaction(entry1));
console.log(addTransaction(entry2));
// console.log(addTransaction(entry3));
// console.log(addTransaction(entry4));

console.log(summary());
