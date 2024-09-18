"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <div className="relative flex items-center ">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Input type="email" id="email" placeholder="E-Mail" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Textarea placeholder="Type Your Message Here." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">Lets Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
