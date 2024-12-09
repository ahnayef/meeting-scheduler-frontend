import { FooterComponent } from "flowbite-react";
import React from "react";
import { FaDiscord, FaFacebookF, FaGithub } from "react-icons/fa6";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

function Footer() {
  return (
    <footer className="w-full border-t-2 bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="w-full md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="/"
              className="flex flex-row gap-1"
            >
              <HiOutlineCalendarDateRange className="text-primary-500 dark:text-primary-400 mr-2 h-8 w-8 self-center" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                MeetFlow
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="/" className="hover:underline">
              MeetFlow™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex sm:mt-0 sm:justify-center">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </a>

            <a
              href="#"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
