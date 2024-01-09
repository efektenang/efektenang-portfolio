const TopCard = () => {
  return (
      <div className="grid lg:grid-cols-5 gap-4 p-4">
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">$7.124</p>
                <p className="text-gray-400">Daily Revenue</p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                  <span className="text-green-700 text-">+19%</span>
              </p>
          </div>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">$7.124</p>
                <p className="text-gray-400">YTD Revenue</p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                  <span className="text-green-700 text-">+19%</span>
              </p>
          </div>
          <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">7.124</p>
                <p className="text-gray-400">Customers</p>
              </div>
              <p className="bg-red-200 flex justify-center items-center p-2 rounded-lg">
                  <span className="text-red-700 text-">-9%</span>
              </p>
          </div>
    </div>
  )
}

export default TopCard