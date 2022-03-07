import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-24 px-10 grid gap-10'>
      <div className='bg-white p-6 rounded-3xl shadow-2xl'>
        <span className='font-semibold text-2xl'>Select Item</span>
        <div className='flex justify-between my-1 pt-3'>
          <span className='text-slate-400'>Grey Chair</span>
          <span className='font-semibold'>$20</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-slate-400'>Grey Chair</span>
          <span className='font-semibold'>$20</span>
        </div>
        <div className='flex justify-between border-t-2 border-dashed mt-2 pt-2'>
          <span className='font-semibold'>Total</span>
          <span className='font-semibold'>$40</span>
        </div>
        <div className='bg-blue-500 text-center text-white rounded-lg mt-4 mx-auto w-3/4 py-3'>
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-600">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-blue-400 rounded-full" />
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

      <div className="bg-white"></div>
      <div className="bg-white"></div>
    </div>
  );
}

export default Home