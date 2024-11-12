import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./button";
import { Textarea } from "./textarea";
import { IoIosSend } from "react-icons/io";
import Background from "./../../assets/artifacts/contact_background.png";
import OnePunch from "./../../assets/images/fiest_punch.png";
import Image from "next/image";
import axios from "axios";
import React from "react";

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Enter a valid message"),
});

export default function ContactForm({ info }: { info?: boolean }) {
  const [loading, setLoading] = React.useState(false);
  const [formRes, setFormRes] = React.useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    axios
      .post(`https://submit-form.com/QGhclTstt`, values, {
        headers: { Accept: "application/json" },
      })
      .then(() => {
        setFormRes("success");
        form.reset();
        setLoading(false);
        setTimeout(() => {
          setFormRes("");
        }, 4000);
      })
      .catch(() => {
        setLoading(false);
        setFormRes("error");
        setTimeout(() => {
          setFormRes("");
        }, 4000);
      });
  }

  return (
    <div className="px-5 md:px-10 lg:px-20 xl:px-5 min-h-screen flex items-end xl:pb-10 justify-center mb-20 auto">
      <div className="w-full ">
        <div className="relative w-full pt-10 pb-5 flex h-fit items-center justify-center">
          <div className="relative grid lg:grid-cols-2 items-end z-10 max-w-5xl w-full">
            <div>
              <Image
                src={OnePunch}
                alt="PunchLine"
                className="xl:absolute bottom-1 -left-40 md:max-h-[550px] w-auto ms-auto"
              />
            </div>
            <div className="xl:pb-10 xl:pt-10 space-y-5 xl:pr-10 -mt-20 lg:mt-0">
              <h4>Contact US</h4>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="input_styled input_back">
                          <FormLabel className="text-lg">Name:</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              autoComplete="name"
                              className="font-medium border-0 text-lg md:text-xl pb-2"
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="input_styled input_back">
                          <FormLabel className="text-lg">Email:</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              autoComplete="email"
                              className="font-medium border-0 text-lg md:text-xl pb-2"
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <div className="relative flex items-start bg-[#933835] border border-[#BB4F33] rounded-xl px-5 py-2 input_back">
                          <FormLabel className="text-lg">Message:</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              className="font-medium text-lg md:text-xl py-0 px-2 h-36 border-0 resize-none"
                            />
                          </FormControl>
                          {formRes === "success" ? (
                            <Button
                              className="absolute z-10 bottom-2.5 right-2.5 text-black bg-white hover:bg-[#FBD40D] px-2.5"
                              type="submit"
                            >
                              <span className="text-xl text-green-600">
                                Success
                              </span>
                            </Button>
                          ) : formRes === "error" ? (
                            <Button
                              className="absolute z-10 bottom-2.5 right-2.5 text-black bg-white hover:bg-[#FBD40D] px-2.5"
                              type="submit"
                            >
                              <span className="text-xl text-red-600">
                                Opps!!! Try again.
                              </span>
                            </Button>
                          ) : (
                            <Button
                              className="absolute z-10 bottom-2.5 right-2.5 text-black bg-white hover:bg-[#FBD40D] px-2.5"
                              type="submit"
                            >
                              <span className="text-xl">
                                {loading ? "Loading" : "Send"}
                              </span>
                              {!loading && (
                                <IoIosSend className="text-base ml-1" />
                              )}
                            </Button>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
          </div>
          <Image
            sizes="100%"
            src={Background}
            alt="Background"
            className="absolute z-0 h-full w-full object-contain object-center hidden xl:block bottom-0"
          />
        </div>
        {info && (
          <p className="max-w-4xl mx-auto text-center text-base md:text-xl mt-10">
            We want to hear from you! <br />
            As part of our desire to build a truly global community, we’d love
            to know where you are from, what you think of our projects or
            anything else you would like us to know. Let’s talk!
          </p>
        )}
      </div>
    </div>
  );
}
