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
    title: "Sign In Page",
    src: "/images/living-pianos-screenshots/sign-in.png",
  },
  {
    title: "Sign Up Page",
    src: "/images/living-pianos-screenshots/sign-up.png",
  },
  {
    title: "Home Page",
    src: "/images/living-pianos-screenshots/home.png",
  },
  {
    title: "About Page",
    src: "/images/living-pianos-screenshots/about.png",
  },
  {
    title: "Piano Store Page",
    src: "/images/living-pianos-screenshots/pianos-for-sale.png",
  },
  {
    title: "Mobile View",
    src: "/videos/living-pianos/lp-mobile-view.mp4",
  },
];

const LivingPianos = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Living Pianos</h1>
        <span>The World&apos;s 1st Online Piano Store</span>
      </div>

      <div className="mt-6 space-y-6">
        <div className="w-1/2 mx-auto text-center space-x-2">
          <span className="font-bold rounded-md border p-1">Docker</span>
          <span className="font-bold rounded-md border p-1">Next JS</span>
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
                    {item.title === "Mobile View" ? (
                      <video
                        preload="auto"
                        className="hover:cursor-pointer mt-2 mx-auto"
                      >
                        <source src={item.src} type="video/mp4" />
                        <track srcLang="en" label="English" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="hover:cursor-pointer mt-2 mx-auto"
                      />
                    )}
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-7xl">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    {item.title === "Mobile View" ? (
                      <video controls preload="auto">
                        <source src={item.src} type="video/mp4" />
                        <track srcLang="en" label="English" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={1000}
                        height={1000}
                        className="hover:cursor-pointer mt-2 mx-auto"
                      />
                    )}
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

export default LivingPianos;
