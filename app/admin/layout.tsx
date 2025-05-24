import { Header } from "@/src/components/header";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className="text-center">
        <NavigationMenuDemo />
      </div>
      <div className="text-center">
        <ModeToggle />
      </div>
      <div className="text-center">
        <MenubarDemo />
      </div> */}

      <Header />
      {props.children}
    </div>
    // <div className="">
    //   <Header />
    // </div>
  );
}
