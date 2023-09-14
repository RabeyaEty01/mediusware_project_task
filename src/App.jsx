import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import AllContacts from "./components/Contacts/AllContacts.jsx";
import USContacts from "./components/Contacts/USContacts.jsx";
import Index from "./components/Index.jsx";
import Menu from "./components/Menu.jsx";
import Problem1 from "./components/Problem-1.jsx";
import Problem2 from "./components/Problem-2.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Menu />}>
            <Route path="problem-1" element={<Problem1 />} />
            <Route path="problem-2" element={<Problem2 />} />
          </Route>
          <Route path="all-contacts" element={<AllContacts />} />
          <Route path="us-contacts" element={<USContacts />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
