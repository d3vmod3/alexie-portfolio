import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="container mx-auto p-2">
      <div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>
        <div className="mt-6 space-y-6">
          <div className="w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 mx-auto text-center space-y-6">
            <div className="p-2">
              <p>
                Hello and welcome! Here, you&apos;ll find a curated selection of
                my work, a testament to my passion and creativity. Each piece
                represents a unique journey, from inception to completion,
                showcasing my dedication to craft and innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {/* Forex Cargo US */}
            <Card className="opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <CardHeader>
                <CardTitle>
                  Forex Cargo US{" "}
                  <span className="text-xs italic">(Enhanced)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tools/Framework:{" "}
                  <span className="font-bold rounded-md border p-1">
                    Codeigniter
                  </span>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild className="mt-6 w-full sm:w-full lg:w-auto">
                  <Link href="./portfolio/forexcargo">View</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Golden Press */}
            <Card className="opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <CardHeader>
                <CardTitle>Golden Press</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tools/Framework:{" "}
                  <span className="font-bold border rounded-md p-1">
                    Wordpress
                  </span>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild className="mt-6 w-full sm:w-full lg:w-auto">
                  <Link href="./portfolio/goldenpress" target="_blank">
                    View
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Living Pianos */}
            <Card className="opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <CardHeader>
                <CardTitle>
                  Living Pianos{" "}
                  <span className="text-xs italic">(under development)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tools/Framework:{" "}
                  <span className="font-bold rounded-md border p-1">
                    Docker
                  </span>{" "}
                  <span className="font-bold rounded-md border p-1">
                    Next JS
                  </span>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild className="mt-6 w-full sm:w-full lg:w-auto">
                  <Link href="./portfolio/living-pianos" target="_blank">
                    View
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Love PH */}
            <Card className="opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <CardHeader>
                <CardTitle>Love PH</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tools/Framework:{" "}
                  <span className="font-bold rounded-md border p-1">
                    Next JS
                  </span>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild className="mt-6 w-full sm:w-full lg:w-auto">
                  <Link
                    href="https://book.philippines-hoho.ph/"
                    target="_blank"
                  >
                    View
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* RONLapor - CMS */}
            <Card className="opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <CardHeader>
                <CardTitle>
                  RONLapor - CMS{" "}
                  <span className="text-xs italic">(under development)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tools/Framework:{" "}
                  <span className="font-bold rounded-md border p-1">
                    Docker
                  </span>{" "}
                  <span className="font-bold rounded-md border p-1">
                    Laravel
                  </span>{" "}
                  <span className="font-bold rounded-md border p-1">
                    Livewire
                  </span>{" "}
                  <span className="font-bold rounded-md border p-1">MySQL</span>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild className="mt-6 w-full sm:w-full lg:w-auto">
                  <Link href="./portfolio/ronlapor" target="_blank">
                    View
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Soros Security Consulting */}
            <Card className="opacity-80 hover:opacity-100 bg-neutral text-neutral-content">
              <CardHeader>
                <CardTitle>Soros Security Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tools/Framework:{" "}
                  <span className="font-bold rounded-md border p-1">
                    Docker
                  </span>{" "}
                  <span className="font-bold rounded-md border p-1">
                    Next JS
                  </span>
                </p>
              </CardContent>
              <CardFooter className="justify-end">
                <Button asChild className="mt-6 w-full sm:w-full lg:w-auto">
                  <Link href="https://sorosservices.com/" target="_blank">
                    View
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
