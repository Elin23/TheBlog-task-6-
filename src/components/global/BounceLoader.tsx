export default function BounceLoader() {
  return (
    <div className="w-full h-screen bg-dark gap-x-2 flex justify-center items-center py-10">
      <div
        className="w-5 h-5 bg-lightGray rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-5 h-5 bg-lightPink rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="w-5 h-5 bg-lightCerulean rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-5 h-5 bg-lightBlue rounded-full animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></div>
    </div>
  );
}
