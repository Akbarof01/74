import Icon from './assets/iconn.svg'
import Img1 from './assets/icon1.svg'
import Imgi from './assets/i.svg'
import Img2 from './assets/img.svg'
import Img3 from './assets/s.svg'
import Img4 from './assets/n.svg'
import Eye from './assets/eye.svg'
import Pencil from './assets/pencil.svg'
import Trash from './assets/trash.svg'
import './App.css'


function App() {

  return (
    <>
     <div>
      <div>
        <img className='ml-auto' src={Icon} alt="" />
      </div>
      <div className='w-[1080px] ml-24 mt-16 flex justify-between bg-[#1A2038] p-2 rounded-md	'>
        <h3 className='text-white flex pl-10'>Brand</h3>
        <h3 className='text-white flex'>Category</h3>
        <h3 className='text-white flex'>Price</h3>
        <h3 className='text-white flex'>Status</h3>
        <h3 className='text-white flex pr-[148px]'>Action</h3>
      </div>
      <div>
      <div className='flex w-[1080px] justify-start bg-[#1A2038] pl-4 p-5 mt-5 ml-24 rounded-md '>
         <img className='w-[44px] h-[44px]' src={Imgi} alt="" />
         <h3 className='ml-[14px] text-white'>Apple
          <br />
          <span className='text-[#6C757D]'>mail@gmail.com!</span>
         </h3>
         <h3 className='text-white text-sm pt-2 pl-14 pr-36'>Technology</h3>
         <h3 className='text-white pt-2'>200.00$</h3>
         <span className='w-[76px] mt-2 h-[35px] text-white bg-[#04D58D] cursor-pointer ml-[140px] p-2 pb-2 rounded-3xl'>Available</span>
         <img className='ml-[115px] w-6 m-5 cursor-pointer' src={Eye} alt="" />
         <img className='w-6 m-5 cursor-pointer' src={Pencil} alt="" />
         <img className='w-6 cursor-pointer' src={Trash} alt="" />
        </div>
        <div className='flex w-[1080px] justify-start bg-[#1A2038] pl-4 p-5 mt-5 ml-24 rounded-md '>
         <img className='w-[44px] h-[44px]' src={Img2} alt="" />
         <h3 className='ml-[14px] text-white'>Realme
          <br />
          <span className='text-[#6C757D]'>mail@gmail.com!</span>
         </h3>
         <h3 className='text-white text-sm pt-2 pl-14 pr-36'>Technology</h3>
         <h3 className='text-white pt-2'>200.00$</h3>
         <span className='w-[85px] mt-2 h-[35px] text-white bg-[#EB5757] cursor-pointer ml-[140px] p-2 pb-2 rounded-3xl'>No Stock</span>
         <img className='ml-[115px] w-6 m-5 cursor-pointer' src={Eye} alt="" />
         <img className='w-6 m-5 cursor-pointer' src={Pencil} alt="" />
         <img className='w-6 cursor-pointer' src={Trash} alt="" />
        </div>
        <div className='flex w-[1080px] justify-start bg-[#1A2038] pl-4 p-5 mt-5 ml-24 rounded-md '>
         <img className='w-[44px] h-[44px]' src={Img3} alt="" />
         <h3 className='ml-[14px] text-white'>Samsung
          <br />
          <span className='text-[#6C757D]'>mail@gmail.com!</span>
         </h3>
         <h3 className='text-white text-sm pt-2 pl-14 pr-36'>Technology</h3>
         <h3 className='text-white pt-2'>200.00$</h3>
         <span className='w-[86px] mt-2 h-[35px]  bg-[#F2C94C] cursor-pointer ml-[140px] p-2 pb-2 rounded-3xl'>Flash Sale</span>
         <img className='ml-[115px] w-6 m-5 cursor-pointer' src={Eye} alt="" />
         <img className='w-6 m-5 cursor-pointer' src={Pencil} alt="" />
         <img className='w-6 cursor-pointer' src={Trash} alt="" />
        </div>
        <div className='flex w-[1080px] justify-start bg-[#1A2038] pl-4 p-5 mt-5 ml-24 rounded-md '>
         <img className='w-[44px] h-[44px]' src={Img4} alt="" />
         <h3 className='ml-[14px] text-white'>Nokia
          <br />
          <span className='text-[#6C757D]'>mail@gmail.com!</span>
         </h3>
         <h3 className='text-white text-sm pt-2 pl-14 pr-36'>Technology</h3>
         <h3 className='text-white pt-2'>200.00$</h3>
         <span className='w-[76px] mt-2 h-[35px] text-white bg-[#04D58D] cursor-pointer ml-[140px] p-2 pb-2 rounded-3xl'>Available</span>
         <img className='ml-[115px] w-6 m-5 cursor-pointer' src={Eye} alt="" />
         <img className='w-6 m-5 cursor-pointer' src={Pencil} alt="" />
         <img className='w-6 cursor-pointer' src={Trash} alt="" />
        </div>
        <div className='mb-[500px] flex w-[1080px] justify-start bg-[#1A2038] pl-4 p-5 mt-5 ml-24 rounded-md '>
         <img className='w-[44px] h-[44px]' src={Img1} alt="" />
         <h3 className='ml-[14px] text-white'>Blackberry
          <br />
          <span className='text-[#6C757D]'>mail@gmail.com!</span>
         </h3>
         <h3 className='text-white text-sm pt-2 pl-14 pr-36'>Technology</h3>
         <h3 className='text-white pt-2'>200.00$</h3>
         <span className='w-[86px] mt-2 h-[35px] text-white bg-[#EB5757] cursor-pointer ml-[140px] p-2 pb-2 rounded-3xl'>No Stock</span>
         <img className='ml-[115px] w-6 m-5 cursor-pointer' src={Eye} alt="" />
         <img className='w-6 m-5 cursor-pointer' src={Pencil} alt="" />
         <img className='w-6 cursor-pointer' src={Trash} alt="" />
        </div>
      </div>
     </div>
    </>
  )
}

export default App
