"use client";
import React from "react";
import HowManyRoles from "./how-many-roles";
import TimeDuration from "./time-duration";
import TechStacks from "./tech-stacks";
import Banner2 from "@/components/ui/sections/Banner2";
import { SendMessageForm } from "@/components/forms/SendMessageForm";
import { Button } from "@/components/ui/button";

export default function StartYourJourney() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Banner2
        title_one="Hire Your Dream"
        title_two="Developer Now"
        description="Get World-class Of The Top of Remote Software Developers To Accelerate Your Development Mission"
        hideCTABtns={true}
        className="h-[70vh]"
      />

      <div className="space-y-12 mt-12">
        <HowManyRoles />
        <TechStacks />
        <TimeDuration />
      </div>
      <div className="justify-center items-center flex gap-3 mt-12 mb-24 ">
        <Button
          className="rounded-full h-12 px-6 py-3 bg-primary/80 border-2 border-primary"
          onClick={() => setOpen(true)}
        >
          Submit requirements
        </Button>
        <Button className="rounded-full h-12 px-6 py-3 bg-primary/50 border-2 border-primary/70">
          Cancel
        </Button>
      </div>
      <SendMessageForm open={open} onOpenChange={setOpen} />
    </div>
  );
}
