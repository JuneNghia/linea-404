import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://uniquiz.online/";
    }, 3000);
  }, []);

  return (
    <div className="h-screen !text-white w-screen flex justify-center items-center">
      <p className="!text-white ">
        <div className="hidden md:block">
          Xin vui lòng đợi trong giây lát, bạn đang được chuyển hướng...
        </div>
        <div className="md:hidden">
          <div className="flex justify-center">
            Bạn đang được chuyển hướng...
          </div>
          <div className="flex justify-center">
            Xin vui lòng đợi trong giây lát
          </div>
        </div>
        <div className="flex justify-center">
          Lưu ý: Không tắt trang hoặc trình duyệt !
        </div>
      </p>
    </div>
  );
}

export default App;
