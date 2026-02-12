import Link from "next/link";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  return (
    <div className="container mx-auto p-2">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Contact Information</h1>
        </div>
        <div className="mt-6 space-y-6">
          <div className="mx-auto text-justify sm:text-justify md:text-center lg:text-center xl:text-center max-w-4xl px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0">
            <p>
              Greetings! Thank you for exploring my portfolio. If you have any
              inquiries, collaboration proposals, or simply wish to connect,
              I&apos;d be delighted to hear from you. Below, you&apos;ll find my
              contact information for convenient communication. Feel free to
              reach out via phone or email, and I&apos;ll respond promptly. Your
              interest is appreciated, and I look forward to the opportunity to
              connect.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Email</h2>
                  astuzon@gmail.com
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Phone</h2>
                  <p>+63 9672 815 421</p>
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
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>Address</h2>
                  <p>
                    8976 San Felipe, San Isidro, Para&#241;aque City, Metro
                    Manila
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
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <div className="flex h-full justify-between items-center border rounded-lg p-4">
                <div className="space-y-2">
                  <h2>LinkedIn</h2>
                  <p>
                    <Button asChild className="w-full sm:w-full lg:w-auto">
                      <Link href="https://www.linkedin.com/in/alexie-tuzon-4a2844103/">
                        Click Here
                      </Link>
                    </Button>
                  </p>
                </div>
                <div>
                  <span className="[&>svg]:h-12 [&>svg]:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
