import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-primary pt-16 pb-8 min-h-screen text-white">
        <div className="custom-container ">
          <Header />
          <div className="flex flex-col gap-y-6 justify-center w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 pt-12 md:pt-16 mx-auto">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
