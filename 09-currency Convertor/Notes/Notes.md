---

# ⚙️ Project Workflow

### Step 1

The user enters an amount in the **From** input box.

↓

### Step 2

The user selects the source currency (e.g., USD).

↓

### Step 3

The user selects the target currency (e.g., INR).

↓

### Step 4

The `useCurrencyInfo()` custom hook receives the selected source currency.

↓

### Step 5

The hook uses the Fetch API to request the latest exchange rates from the Currency API.

↓

### Step 6

The API returns a JSON object containing all exchange rates.

↓

### Step 7

The exchange rates are stored inside state using `setData()`.

↓

### Step 8

When the user clicks the **Convert** button, the selected exchange rate is used to calculate the converted amount.

↓

### Step 9

The converted amount is displayed in the **To** input box.

---

# 🔄 How Swap Works

When the **Swap** button is clicked:

- Source currency becomes the destination currency.
- Destination currency becomes the source currency.
- Amount and converted amount are exchanged.
- The UI updates automatically because React re-renders after state changes.

---

# 🛠 Methods & Hooks Used

## useState()

Stores dynamic values:

- Amount
- Source Currency
- Destination Currency
- Converted Amount
- Currency Data

---

## useEffect()

Runs the API request whenever the selected source currency changes.

```jsx
useEffect(() => {

}, [currency]);
```

---

## Custom Hook

```jsx
useCurrencyInfo(currency)
```

Encapsulates the API fetching logic so it can be reused and keeps `App.jsx` clean.

---

## Fetch API

```jsx
fetch(API_URL)
```

Requests the latest exchange rates from the Currency API.

---

## Object.keys()

```jsx
Object.keys(currencyInfo)
```

Extracts all available currency codes from the API response.

These keys are used to populate the dropdown list.

---

## map()

```jsx
currencyOptions.map(...)
```

Loops through all currency codes and creates `<option>` elements dynamically.

---

## useId()

```jsx
const amountInputId = useId();
```

Generates a unique ID to connect the `<label>` with the `<input>` element, improving accessibility.

---

## Props

Props make the `InputBox` reusable.

Some important props are:

- label
- amount
- currencyOptions
- onAmountChange
- onCurrencyChange
- selectCurrency

---

## Event Handlers

Used to handle user interactions.

Examples:

- `onChange()`
- `onClick()`
- `onSubmit()`

---

## Conditional Rendering

```jsx
onAmountChange && onAmountChange(...)
```

Ensures the callback function exists before calling it, preventing runtime errors.

---

## State Update Functions

Used throughout the project:

- setAmount()
- setFrom()
- setTo()
- setConvertedAmount()
- setData()

These update the state and automatically trigger a React re-render.