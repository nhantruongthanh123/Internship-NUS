import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 h-[80vh]">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-8 bg-red-500"> </div>

        <div className="col-span-2 bg-blue-500"></div>
      </div>
    </>
  );
}

export default App;
