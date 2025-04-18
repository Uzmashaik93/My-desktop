import React, { useState } from "react";
import {
  Github,
  Linkedin,
  BatteryFullIcon,
  Wifi,
  CircleUserRound,
  Search,
  Bluetooth,
  UserRoundIcon,
} from "lucide-react";

const getResponsivePosition = (xPercent, yPercent) => ({
  x: window.innerWidth * xPercent,
  y: window.innerHeight * yPercent,
});

function App() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [highestZ, setHighestZ] = useState(1);
  const [windows, setWindows] = useState([
    {
      id: "about",
      title: "About Me",
      content: (
        <div className="p-6 w-[90vw] sm:w-[500px] max-w-full">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src="/Profile.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Shaik Uzma
              </h2>
              <p className="text-gray-600">
                Full Stack Developer | Front-End Developer
              </p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700">
            <p className="text-sm font-medium">
              Junior web developer with a background as a Catalogue Quality
              Analyst, where I successfully implemented process improvements
              that led to measurable efficiency gains. Now, I’m excited to apply
              my analytical mindset and problem-solving skills to the tech
              industry.
            </p>
            <p className="text-sm font-medium">
              After completing an intensive full-stack bootcamp at Ironhack, I
              built several responsive web applications using JavaScript, React,
              Node.js, and MongoDB. I thrive on solving real-world challenges
              through code and enjoy collaborating in agile teams to build
              impactful digital solutions. I’m currently seeking opportunities
              where I can continue learning, contribute meaningfully, and grow
              as a developer. Passionate about technology, teamwork, and
              continuous improvement—also a art enthusiast who loves tackling
              coding challenges!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Uzmashaik93"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-uzma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      ),
      isOpen: true,
      position: getResponsivePosition(0.05, 0.05), // 5% from top-left
      zIndex: 1,
      isMinimized: false,
    },
    {
      id: "projects",
      title: "Projects",
      content: (
        <div className="p-6 w-[90vw] sm:w-[500px] max-w-full">
          <div className="grid grid-cols md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <a
                href="https://buddybook-v2.netlify.app/"
                target="
              _black"
              >
                <h3 className="font-semibold text-lg mb-2">BuddyBook-V2</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Buddy Book V2 is a digital slambook application that lets
                  users create teams, add profiles, and invite friends via email
                  to join and share memories. Built with Vite, TypeScript, and
                  PostgreSQL.
                </p>
              </a>
              <div className="flex flex-wrap gap-1 space-x-2">
                <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Vite
                </div>
                <div className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                  Typescript
                </div>
                <div className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">
                  Express
                </div>
                <div className="px-2 py-1 bg-pink-100 text-pink-500 rounded-full text-xs">
                  Node.js
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  PostgreSQL
                </div>
              </div>

              <a
                href="https://github.com/Uzmashaik93/BuddyBook-v2-client"
                target="_blank"
              >
                <Github size={15} className="mt-2" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <a href="https://portfolify-project.netlify.app/" target="_blank">
                <h3 className="font-semibold text-lg mb-2">Portfolify</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Portfolify is a dynamic portfolio building application that
                  enables users to create and publish their personal portfolios
                  with various templates. Built with React (Vite) and styled
                  with Tailwind CSS, this front end interacts with the backend
                  via REST API.
                </p>
              </a>
              <div className="flex flex-wrap gap-1 space-x-2">
                <div className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                  Javascript
                </div>
                <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Vite
                </div>
                <div className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                  React
                </div>
                <div className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">
                  Express
                </div>
                <div className="px-2 py-1 bg-pink-100 text-pink-500 rounded-full text-xs">
                  Node.js
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  MongoDB
                </div>
              </div>

              <a href="https://github.com/Project-Portfolify" target="_blank">
                <Github size={15} className="mt-2" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <a href="https://dessertdream.netlify.app/" target="_blank">
                <h3 className="font-semibold text-lg mb-2">Dessert Dream</h3>
                <p className="text-gray-600 text-sm mb-3">
                  I had the pleasure of working on Dessert Dream by Namita, a
                  beautiful dessert store, to build an interactive and
                  user-friendly website. The goal was to design a visually
                  appealing platform with real-time customer reviews, an
                  intuitive UI, and smooth performance.Built using Typescript
                  and tailwind, and deployed on Netlify.
                </p>
              </a>
              <div className="flex flex-wrap gap-1 space-x-2">
                <div className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                  Typescript
                </div>
                <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Vite
                </div>
                <div className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                  React
                </div>
                <div className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">
                  TailwindCss
                </div>
              </div>

              <a
                href="https://github.com/Uzmashaik93/DessertDream"
                target="_blank"
              >
                <Github size={15} className="mt-2" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
              <a href="https://buddy-book.netlify.app/" target="_blank">
                <h3 className="font-semibold text-lg mb-2">Buddy Book</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Buddy Book is an interactive slambook website where users can
                  create their own profile. Each time a new team is created, an
                  access ID is generated, which is required to join and view or
                  add profiles within the team. The platform provides full CRUD
                  (Create, Read, Update, Delete) functionality on the Firebase
                  database.
                </p>
              </a>
              <div className="flex flex-wrap gap-1 space-x-2">
                <div className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                  Javascript
                </div>
                <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Vite
                </div>
                <div className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">
                  React
                </div>
              </div>

              <a href="https://github.com/BuddyBook" target="_blank">
                <Github size={15} className="mt-2" />
              </a>
            </div>
          </div>
        </div>
      ),
      isOpen: false,
      position: getResponsivePosition(0.2, 0.05), // 25% from left
      zIndex: 1,
      isMinimized: false,
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <div className="p-6 w-[90vw] sm:w-[500px] max-w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="uzmashaik97910@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      ),
      isOpen: false,
      position: getResponsivePosition(0.4, 0.05), // 50% from left
      zIndex: 1,
      isMinimized: false,
    },
  ]);

  const handleWindowClick = (id) => {
    setActiveWindow(id);
    setWindows(
      windows.map((window) => ({
        ...window,
        zIndex: window.id === id ? highestZ + 1 : window.zIndex,
      }))
    );
    setHighestZ(highestZ + 1);
  };

  const toggleWindow = (id) => {
    setWindows(
      windows.map((window) =>
        window.id === id
          ? { ...window, isOpen: !window.isOpen, isMinimized: false }
          : window
      )
    );
  };

  const minimizeWindow = (id, e) => {
    e.stopPropagation();
    setWindows(
      windows.map((window) =>
        window.id === id ? { ...window, isMinimized: true } : window
      )
    );
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80')] bg-cover overflow-hidden relative">
      {/* Menu Bar */}
      <div className="h-7 bg-gray-800/80 backdrop-blur-md flex justify-between text-white">
        <div className="flex items-center px-2 gap-4">
          <img
            src="/apple-logo-removebg-preview.png"
            alt="apple-logo"
            className="w-7"
          />
          <div className="text-sm font-medium">Uzma's Desktop</div>
          <div className="flex gap-4 invisible md:visible">
            <div className="text-sm">File</div>
            <div className="text-sm">Edit</div>
            <div className="text-sm">View</div>
            <div className="text-sm">Window</div>
            <div className="text-sm">Help</div>
          </div>
        </div>
        <div className="flex invisible md:visible items-center px-2 gap-3">
          <Bluetooth size={15} />
          <BatteryFullIcon fill="white" size={20} />
          <Wifi size={19} />
          <CircleUserRound size={16} />
          <Search size={16} />
          <img
            src="/mac-removebg-preview.png"
            alt="control-logo"
            className="w-5"
          />
          <div className="text-xs">Wed 16 Apr</div>
          <div className="text-xs">12:12 PM</div>
        </div>
      </div>

      {/* Windows */}
      {windows.map(
        (window) =>
          window.isOpen &&
          !window.isMinimized && (
            <div
              key={window.id}
              className="absolute bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200/50 w-[500px]"
              style={{
                left: window.position.x,
                top: window.position.y,
                zIndex: window.zIndex,
              }}
              onClick={() => handleWindowClick(window.id)}
            >
              <div className="flex items-center h-8 bg-gray-100/90 rounded-t-xl px-3">
                <div className="flex space-x-2 flex-1">
                  <button
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
                    onClick={() => toggleWindow(window.id)}
                  />
                  <button
                    className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600"
                    onClick={(e) => minimizeWindow(window.id, e)}
                  />
                  <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
                  {window.title}
                </div>
              </div>
              <div className="max-h-[600px] overflow-auto">
                {window.content}
              </div>
            </div>
          )
      )}

      {/* Dock */}
      <div className="fixed w-80 md:w-auto bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-lg px-2 py-1 rounded-xl shadow-md z-50">
        <div className="flex space-x-2">
          <img
            src="/finder-removebg-preview.png"
            alt="finder-icon"
            className="w-10 p-1 rounded-lg cursor-pointer transition-all transform hover:scale-110 hover:bg-white/30"
          />
          <img
            src="/settin-icon-removebg-preview.png"
            alt="settings-icon"
            className="w-10 p-1 rounded-lg cursor-pointer transition-all transform hover:scale-110 hover:bg-white/30"
          />
          <img
            src="/Chrome-removebg-preview.png"
            alt="chrome-icon"
            className="w-10 p-1 rounded-lg cursor-pointer transition-all transform hover:scale-110 hover:bg-white/30"
          />

          {windows.map((window) => (
            <div
              key={window.id}
              className={`p-1 rounded-lg cursor-pointer transition-all transform hover:scale-110
          ${window.isOpen ? "bg-blue-500/20" : "hover:bg-white/30"}`}
              onClick={() => toggleWindow(window.id)}
            >
              {window.id === "about" && (
                <UserRoundIcon size={32} className="text-white" />
              )}
              {window.id === "projects" && (
                <img
                  src="/folder-removebg-preview.png"
                  alt="folder-icon"
                  className="w-8"
                />
              )}
              {window.id === "contact" && (
                <img src="/mail-icon.png" alt="mail-icon" className="w-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
