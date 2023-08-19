import logo from '../../assets/logo.png';
export default function Layout({children}) {
  return (
    <div className="grid grid-cols-2   bg-layout bg-no-repeat bg-cover  min-h-screen">
      <div className='flex flex-col items-center justify-center'>
        <img src={logo} alt="logo" className="h-20 mx-auto" />
        <h1 className="text-center text-4xl font-bold text-white">
          Bienvenu sur notre reseau social
        </h1>
      </div>
       <div className='flex flex-col items-start justify-center'>
         <div className='bg-black/50 p-12 min-w-[80%]'>
         {children}
         </div>
       </div>
    </div>
  )
}
