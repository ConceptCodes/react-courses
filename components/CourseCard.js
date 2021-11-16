import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <div className="space-y-5">
      <figure className="flex flex-col rounded-lg bg-white">
        <Image src="https://via.placeholder.com/200" className="rounded-t-lg z-0" width={200} height={200} />
        <article className="m-10 space-y-5">
          <h1 className="text-2xl font-medium">title</h1>
          <p className="text-gray-500 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <hr />
          <div className="col-start-2 row-start-1 row-end-3">
            <div className="sr-only">Users</div>
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                {
                    [...Array(5)].map((x, index) => <Image src="https://via.placeholder.com/100" alt="title" width={48} height={48} className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />)
                }
            </div>
          </div>
        </article>
      </figure>
      <article className="h-24 relative p-5 flex space-x-3 items-center justify-center rounded-lg bg-white">
          <div className="overflow-hidden h-2 text-xs w-full flex justify-between rounded bg-purple-200">
            <div style={{width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
          </div>
            <div>
                <p className="text-gray-500 text-lg">70%</p>
            </div>
      </article>
    </div>
  );
}
