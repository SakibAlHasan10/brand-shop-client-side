import { FaGoogle, FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <div className="flex items-center">
        <span className="w-full border-b-2"></span>
        <span className="px-2 py-1 rounded-md text-md m-2 border-2">or</span>
        <span className="w-full border-b-2"></span>
      </div>
      <div className="flex justify-center mt-6 gap-6">
        <button>
          <FaGoogle className="text-3xl border-2 p-3 rounded-full text-white bg-red-500 w-12 h-12" />
        </button>
        <button>
          <FaGithub className="text-3xl border-2 p-3 rounded-full text-white bg-black w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default Social;
