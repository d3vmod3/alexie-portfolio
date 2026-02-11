"use client";

import Image from "next/image";
import { useState, useMemo } from "react";

const About = () => {
  const [birthdate, setBirthdate] = useState("1996-07-11");

  const age = useMemo(() => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    if (isNaN(birthDate.getTime())) return null;

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }, [birthdate]);

  return (
    <div className="container mx-auto p-2">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Basic Information</h1>
        </div>
        <div className="mt-6 space-y-6">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <Image
                src="/images/profile-pic.jpeg"
                alt=""
                width={100}
                height={100}
                className="size-72 rounded-full transition-all"
              />
            </div>
            <div className="px-2">
              <p>
                Experienced Information Technology Programmer with a
                demonstrated history of working in the computer software
                industry. Skilled in Software System Analysis, HTML,
                Programming, Software Development, and Web Services. Strong
                engineering professional and a good team player.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Full Name</h2>
                  <p>Alexie Simangan Tuzon</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Gender</h2>
                  <p>Male</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Birthdate</h2>
                  <p>
                    July 11, 1996 (
                    {age !== null ? `${age} years old` : "Years Old"}) years
                    old)
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Highest level of education</h2>
                  <p>Bachelor of Science in Information Technology</p>
                  <span className="text-sm">
                    St. Paul University Philippines (S.Y. 2012-2016)
                  </span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
