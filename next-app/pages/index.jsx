import Button from "../components/Button";

const IndexPage = () => {
  return (
    <>
    {false &&<div className="w-64 h-64 bg-emerald-300  flex flex-col items-center p-2">
        <h1 className="font-black text-xl text-emerald-900">اینستایار</h1>
        <div className="text-center mt-4">
          <Button title='ورود'/>
          <Button title='ثبت فاکتور'/>
          <Button title='ثبت تراکنش'/>
          
        </div>
        <div className="h-1 w-[90%] bg-gray-500 mt-3"></div>
        <div className="mt-2">
          <span className="text-gray-800 font-bold text-sm">
            www.instayar.com
          </span>
        </div>
      </div>}
      </>
  );
};

export default IndexPage;
