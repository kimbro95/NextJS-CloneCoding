import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 xl:place-content-center py-24 px-10 grid gap-10 xl:grid-cols-3 lg:grid-cols-2'>
      <div className='bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-2xl'>
        <span className='dark:text-white font-semibold text-2xl'>Select Item</span>
        <ul>
          {
          [1, 2].map((i) => (
          <div key={i} className='flex justify-between my-1 py-1 odd:bg-gray-300 even:bg-gray-400'>
            <span className='text-gray-500 dark:text-gray-600'>Grey Chair</span>
            <span className='font-semibold'>$20</span>
          </div>
          ))
          }
        </ul>
        <div className='flex justify-between border-t-2 border-dashed mt-2 pt-2'>
          <span className='font-semibold dark:text-white'>Total</span>
          <span className='font-semibold dark:text-white'>$40</span>
        </div>
        <button 
        className='bg-blue-500 display: block text-white rounded-lg mt-4 mx-auto w-3/4 py-3 
        dark:hover:bg-black hover:bg-teal-500 dark:hover:text-white hover:text-black
        active:bg-yellow-500 focus:text-red-500
        dark:bg-black dark:border-white dark:border-2'>
          Checkout
        </button>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="portrait:bg-blue-300 landscape:bg-lime-400 p-6 pb-14 xl:pb-44">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-blue-400 rounded-full group-hover:bg-red-400 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600">Spent</span>
              <span className="font-semibold">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-semibold">Kim Bro</span>
            <span className="text-gray-500">Seoul</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span className='text-2xl font-semibold'>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-0 mb-5 flex justify-between items-center">
            <div className='space-x-2'>
              <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition'></button>
              <button className='w-5 h-5 rounded-full bg-blue-500 focus:ring-2 ring-offset-2 ring-blue-500 transition'></button>
              <button className='w-5 h-5 rounded-full bg-green-500 focus:ring-2 ring-offset-2 ring-green-500 transition'></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home