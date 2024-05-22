import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const DownloadApp = () => {
  return (
    <section className="max-container padding-container flex-col flexCenter pt-5 md:px-20 gap-5 lg:py-10 relative">
      <h2 className="text-gray-400 bold-32 lg:bold-40 text-center">
        Available For Your Smartphone.
      </h2>
      <p className="lg:w-[60%] text-center">
        Experience the ultimate business solution with our cutting-edge app.
        Download now and take your productivity to the next level.
      </p>
      <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row">
        <Image src="/i-store.png" alt="istore" width={200} height={40} />
        <Image src="/play-store.png" alt="istore" width={200} height={40} />
      </div>
      <div className="flex items-center space-x-2 mb-10">
        <Label htmlFor="enable-mode">Enable Update</Label>
        <Switch id="enable-mode" />
      </div>
    </section>
  );
};

export default DownloadApp;
