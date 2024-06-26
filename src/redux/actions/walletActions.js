export const ADD_WALLET = 'ADD_WALLET';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const FLAG_IN_EDIT = 'FLAG_IN_EDIT';

export const actAddWallet = (wallet) => ({
  type: ADD_WALLET,
  wallet,
});

// action para o botão de editar e remover despesa
export const actDeleteExpense = (expenseId) => ({ type: DELETE_EXPENSE, expenseId });

export const actEditExpense = (newExpenses) => ({ type: EDIT_EXPENSE, newExpenses });

export const actInEdit = () => ({ type: FLAG_IN_EDIT });

// actions assincronas na página de Login
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const actFecthAPI = ({ type: REQUEST_API });

export const actGetCurrencies = (currencies) => ({ type: GET_CURRENCIES, currencies });

export function thunkFetchCurrencies() {
  return async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await request.json();
      const currencies = Object.keys(json).filter((coin) => coin !== 'USDT'); // [m1, m2, m3]
      return dispatch(actGetCurrencies(currencies));
    } catch (error) {
      console.log(error);
    }
  };
}

// actions assincronas na página do walletForm
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const actGetExpenses = (expenses) => (
  { type: ADD_EXPENSES, expenses });

export function thunkFetchQuotation(walletFormInputs) {
  return async (dispatch) => {
    try {
      const request = await fetch('https://economia.awesomeapi.com.br/json/all');
      const json = await request.json();
      const expenses = { ...walletFormInputs, exchangeRates: json };
      return dispatch(actGetExpenses(expenses));
    } catch (error) {
      console.log(error);
    }
  };
}
