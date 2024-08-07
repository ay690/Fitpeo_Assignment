import { Sidebar, Header } from "./components/index";
function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
      </div>
    </div>
  );
}

export default App;
