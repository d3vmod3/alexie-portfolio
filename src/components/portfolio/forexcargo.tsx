import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const screenshots = [
  {
    title: "Blacklist Customer",
    src: "/images/forex-cargo-screenshots/blacklist-customer.png",
  },
  {
    title: "Bulk SMS",
    src: "/images/forex-cargo-screenshots/bulksms.png",
  },
  {
    title: "Bulk SMS Create",
    src: "/images/forex-cargo-screenshots/bulksms-create.png",
  },
];

const ForexCargo = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Forex Cargo US</h1>
        <span>
          An admin website of{" "}
          <a
            href="https://forexeship.com/"
            className="underline hover:cursor-pointer"
            target="_blank"
          >
            Forex Eship
          </a>
        </span>
      </div>

      <div className="mt-6 space-y-6">
        <div className="w-1/2 mx-auto text-center space-x-2">
          <span className="font-bold rounded-md border p-1">Laravel</span>
          <span className="font-bold rounded-md border p-1">Livewire</span>
          <span className="font-bold rounded-md border p-1">MySQL</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {screenshots.map((item, idx) => (
            <div
              key={idx}
              className="border p-4 rounded-lg w-full opacity-80 hover:opacity-100 bg-neutral text-neutral-content"
            >
              <div className="space-y-2">
                <h2>{item.title}</h2>

                <Dialog>
                  <DialogTrigger className="w-full">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="hover:cursor-pointer mt-2 mx-auto"
                    />
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-7xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="w-full"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForexCargo;
