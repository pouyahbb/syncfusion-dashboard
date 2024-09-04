import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { darken } from "polished"; // استفاده از کتابخانه polished برای تیره‌تر کردن رنگ

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">تنظیمات</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">گزینه پوسته</p>
          <div className="mt-4 relative flex items-center">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <span
              style={{ top: "-12px", right: "10px" }}
              className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none  translate-y-2/4 translate-x-2/4 peer-checked:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 scale-105"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <label htmlFor="light" className="mr-2 text-md cursor-pointer">
              روشن
            </label>
          </div>
          <div className="mt-4 relative flex items-center">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={setMode}
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/10 bg-gray-900/5 p-0 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              checked={currentMode === "Dark"}
            />
            <span
              style={{ top: "-12px", right: "10px" }}
              className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none  translate-y-2/4 translate-x-2/4 peer-checked:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-6 h-6 scale-105"
              >
                <circle cx="12" cy="12" r="12" fill="#484b52" />{" "}
                <path
                  fill="white"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                ></path>
              </svg>
            </span>
            <label htmlFor="light" className="mr-2 text-md cursor-pointer">
              تیره
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl">رنگ‌های پوسته</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => {
              const borderColor = darken(-0.1, item.color); // تیره کردن رنگ

              return (
                <TooltipComponent
                  key={index}
                  content={item.name}
                  position="TopCenter"
                >
                  <div
                    className="relative mt-2 cursor-pointer flex gap-5 items-center"
                    key={item.name}
                  >
                    <button
                      type="button"
                      className={`h-10 w-10 rounded-full cursor-pointer ${
                        item.color === currentColor ? "border-2 p-1" : ""
                      }`}
                      style={{
                        backgroundColor: item.color,
                        borderColor:
                          item.color === currentColor
                            ? borderColor
                            : "transparent",
                      }}
                      onClick={() => setColor(item.color)}
                    ></button>
                  </div>
                </TooltipComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
