import React from 'react';
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
import CountDisplay from './components/CountDisplay';
function App() {
  return (
    <Provider store={store}>
      <>
      <Counter />
      <CountDisplay/>
      </>
    </Provider>
  );
}

export default App;
