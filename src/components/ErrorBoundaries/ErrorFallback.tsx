const ErrorFallback = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          ⚠️ Có lỗi xảy ra!
        </h1>
        <p className="text-gray-700 mb-4">
          Xin lỗi, đã có lỗi xảy ra trong ứng dụng. Vui lòng thử lại sau.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Tải lại trang
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
