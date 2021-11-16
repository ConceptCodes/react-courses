import { HeartIcon } from '@heroicons/react/outline'

const group = [
  {
    title: "menu",
    links: [
      { icon: "", text: "my groups" },
      { icon: "", text: "browse courses" },
      { icon: "", text: "my categories" },
      { icon: "", text: "my messages" },
    ],
  },
  {
    title: "groups",
    links: [
      { icon: "", text: "UI/UX" },
      { icon: "", text: "industrial design" },
      { icon: "", text: "architecture" },
    ],
  },
];

export default function Sidebar() {
  return (
    <section className="flex flex-col w-[300px] min-h-screen px-4 py-8 bg-white border-r ">
      <div className="flex flex-col">
        <nav className="space-y-5">
          {group.map((x, index) => (
            <div className="flex flex-col justify-between flex-1">
              <h2 className="uppercase text-gray-500 pb-5 dark:text-white">{x.title}</h2>
              {
                x.links.map((x, index) => (            
                <a
                  key={index}
                  className="flex px-3 space-x-2 font-thin dark:text-gray-600 hover:font-medium hover:text-blue-600 hover:bg-blue-200 hover:border-l-2 hover:border-blue-600 items-center py-2"
                  href="#"
                >
                  <HeartIcon className="h-3 hover:text-blue-600" />
                  <span className="capitalize font-medium">{x.text}</span>
                </a>))
              }
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
