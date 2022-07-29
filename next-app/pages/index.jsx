import { useState } from "react";
import Button from "../components/Button";

const IndexPage = () => {
  const [whichPage, setWhichPage] = useState(1);
  return (
    <>
      <div className="w-64  bg-emerald-300  flex flex-col items-center p-2">
        {whichPage == 1 && (
          <>
            <h1 className="font-black text-xl text-emerald-900">ورود</h1>
            <div className="text-center mt-4">
              <input
                placeholder="نام کاربری"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />
              <input
                placeholder="رمز عبور"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />
              <Button onClick={() => setWhichPage(2)} title="ورود" />
            </div>
            <div className="h-1 w-[90%] bg-gray-500 mt-3"></div>
            <div className="mt-2">
              <span className="text-gray-800 font-bold text-sm">
                www.instayar.com
              </span>
            </div>
          </>
        )}
        {whichPage == 2 && (
          <>
            <h1 className="font-black text-xl text-emerald-900">
              آیدی اینستاگرام
            </h1>
            <div className="text-center mt-4">
              <input
                placeholder="آیدی اینستاگرام"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />

              <Button onClick={() => setWhichPage(3)} title="تایید" />
            </div>
            <div className="h-1 w-[90%] bg-gray-500 mt-3"></div>
            <div className="mt-2">
              <span className="text-gray-800 font-bold text-sm">
                www.instayar.com
              </span>
            </div>
          </>
        )}

        {whichPage == 3 && (
          <>
            <div className="w-64 h-64 bg-emerald-300  flex flex-col items-center p-2">
              <h1 className="font-black text-xl text-emerald-900">اینستایار</h1>
              <div className="text-center mt-4">
                <Button onClick={() => setWhichPage(4)} title="ثبت فاکتور" />
                <Button title="ثبت تراکنش" />
              </div>
              <div className="h-1 w-[90%] bg-gray-500 mt-3"></div>
              <div className="mt-2">
                <span className="text-gray-800 font-bold text-sm">
                  www.instayar.com
                </span>
              </div>
            </div>
          </>
        )}

       

        {whichPage == 4 && (
          <>
            <h1 className="font-black text-xl text-emerald-900">ثبت فاکتور</h1>
            <div className="text-center mt-4">
              <input
                placeholder="نام و نام خانوادگی"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />
              <input
                placeholder="آیدی اینستاگرام"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />
              <input
                placeholder="موبایل"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />
              <input
                placeholder="محصولات"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />
              <input
                placeholder="تخفیف ادمین"
                className="bg-slate-100  text-base font-bold  py-1 px-4 w-48 rounded-lg shadow-md my-2 text-blue-800"
                type="text"
              />

              <Button onClick={() => setWhichPage(1)} title="تایید" />
            </div>
            <div className="h-1 w-[90%] bg-gray-500 mt-3"></div>
            <div className="mt-2">
              <span className="text-gray-800 font-bold text-sm">
                www.instayar.com
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default IndexPage;
