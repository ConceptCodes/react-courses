import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import CourseCard from '../components/CourseCard'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex bg-gray-200 dark:bg-gray-900">
       <Sidebar />
       <section className="flex flex-col pt-10 px-20">
         <div className="flex pb-10 justify-between">
            <h2 className="font-medium text-3xl">My Courses</h2>
            <div className="bg-white dark:bg-gray-800 flex items-center p-2 cursor-pointer space-x-5 rounded-lg filter ">
              All courses
              <ChevronDownIcon className="h-5" />
            </div>
         </div>
         <div className="grid flex-grow grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overscroll-contain gap-4">
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
