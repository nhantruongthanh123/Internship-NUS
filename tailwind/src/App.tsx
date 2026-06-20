import Photo from "./components/Photo";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 h-screen bg-stone-100">
        <div className="col-span-2 ">
          <Sidebar />
        </div>
        <div className="col-span-8 bg-white my-4">
          <div className="flex justify-center items-center font-bold pt-4 pb-8">
            <div className="p-2 text-white bg-indigo-800 border-2 border-indigo-800">
              PHOTO
            </div>
            <div className="p-2 text-indigo-800 bg-white border-2 border-indigo-800">
              ALBUM
            </div>
          </div>

          <div className="grid grid-cols-2">
            <Photo imgURL="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg"></Photo>
            <Photo imgURL="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-005.jpg"></Photo>
            <Photo imgURL="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-003.jpg"></Photo>
            <Photo imgURL="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-004.jpg"></Photo>
            <Photo imgURL="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-002.jpg"></Photo>
            <Photo imgURL="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-001.jpg"></Photo>
          </div>
        </div>

        <div className="col-span-2 "></div>
      </div>
    </>
  );
}

export default App;
