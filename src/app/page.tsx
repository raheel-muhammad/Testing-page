import Approval from "./Components/Approval";


export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-8 bg-gray-50 h-full mx-auto w-full overflow-hidden">
      <Approval />
    </div>
  );
}
