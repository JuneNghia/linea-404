import { useEffect } from "react";

function App() {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://uniquiz.online/";
    }, 3000)
  }, [])

  return (
    <div className="h-screen !text-white w-screen flex justify-center items-center">
      <p className="!text-white">
        Xin vui lòng đợi trong giây lát, bạn đang được chuyển hướng... <br />
        <span className="flex justify-center">
          Vui lòng không tắt trang hoặc trình duyệt !
        </span>
      </p>
    </div>
  );
}

export default App;
