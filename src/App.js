import { Sidebar, Header, DashboardContent } from "./components/index";
function App() {
  return (
    <div className="flex min-h-screen text-gray-200 bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
