import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CourseCard from '../components/CourseCard'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-200">
       <Sidebar />
       <section className="flex flex-col p-20">
         <div className="flex pb-10 justify-between">
            <h2 className="font-medium text-3xl">My Courses</h2>
            <div className="bg-white flex p-2 items-center capitalize rounded-lg filter ">
              all courses
            </div>
         </div>
         <div className="grid flex-grow grid-cols-3 overscroll-contain gap-4">
           {
             [...Array(6)].map((index) => <CourseCard key={index} />)
           }
         </div>
       </section>
      </main>
      <footer className="">
       
      </footer>
    </div>
  )
}
