import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-24 px-10 grid gap-10'>
      <div className='bg-white p-6 rounded-3xl shadow-2xl'>
        <span className='font-semibold text-2xl'>Select Item</span>
        <ul>
          {
          [1, 2, 3, 4].map((i) => (
          <div key={i} className='flex justify-between my-1 py-1 odd:bg-gray-300 even:bg-gray-400'>
            <span className='text-gray-500'>Grey Chair</span>
            <span className='font-semibold'>$20</span>
          </div>
          ))
          }
        </ul>
        <ul>
          {
            ["1", "2", "3", ""].map((v, i) => (
              <li key={i} className="bg-green-400 py-1 empty:hidden">
                {v}
              </li>
            ))
          }
        </ul>
        <div className='flex justify-between border-t-2 border-dashed mt-2 pt-2'>
          <span className='font-semibold'>Total</span>
          <span className='font-semibold'>$40</span>
        </div>
        <button 
        className='bg-blue-500 display: block text-white rounded-lg mt-4 mx-auto w-3/4 py-3 
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:text-red-500'>
          Checkout
        </button>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
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

      <div className="bg-white p-6 rounded-3xl shadow-xl">
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

      <form className='flex flex-col space-y-2 bg-yellow-400 p-5 focus-within:bg-green-400'>
        <input type="text" placeholder='UserName' required className='required:border-2 border-violet-600' />
        <input type="password" placeholder='Password' required className='invalid:bg-orange-500' />
        <br/>
        <input type="text" placeholder='UserName2' required className='placeholder-shown:bg-teal-500 placeholder:text-red-600' />
        <input type="password" placeholder='Password2' disabled className='disabled:opacity-2' />
        <br/>
        <input type="text" placeholder='UserName3' required className='required:bg-red-500 invalid:bg-blue-600 valid:bg-violet-600' />
        <input type="submit" value="login" className='bg-white'/>
      </form>

      {/* 
        -peer 
        peer를 선언할 때는 peer selector 보다 위에 작성해야한다.
      */}
      <form className="flex flex-col space-y-2 p-5 ">
        <input 
          type="text"
          required
          placeholder='UserName'
          className='peer border p-1 border-gray-400 rounded-md'
        />
        <span className='hidden peer-invalid:block peer-invalid:text-red-400'>Invaild</span>
        <span className='hidden peer-valid:block peer-valid:text-teal-500'>Vaild</span>
        <input type="submit" value="login" className='bg-white'/>
      </form>
    </div>
  );
}

export default Home