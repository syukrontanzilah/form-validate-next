// import Image from "next/image";
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { TalkToSalesAction } from "./actions";
import { SubmitButton } from "./components/SubmitButton";
// import { useFormState } from "react-dom";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "./zodSchema";
import { useActionState } from "react";

export default function Home() {
  const [salesResult, salesAction] = useActionState(TalkToSalesAction, undefined);

  const [salesForm, salesFields] = useForm({
    lastResult: salesResult,

    onValidate({formData}){
      return parseWithZod(formData, {schema: submissionSchema} )
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  })

  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-5">
      <h1 className="text-4xl font-bold mb-7">Contact us</h1>
      <Card className="max-w-[500px] w-full">
        <Tabs defaultValue="sales">
          {/* Tab 1 */}
          <CardContent className="mt-5">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="sales">
              <div className="text-foreground text-sm">
                You want to integrate your product with us? we can help you
                please contact us down below!
              </div>
              <form 
              action={salesAction}
              id={salesForm.id}
              onSubmit={salesForm.onSubmit}
              noValidate
              className="flex flex-col gap-y-4 mt-5"
              >
                <input type="hidden" name="_gotcha"/>
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input name={salesFields.name.name} 
                  defaultValue={salesFields.name.initialValue}
                  key={salesFields.name.key} placeholder="Name" />
                  <p className="text-red-500 text-sm">{salesFields.name.errors}</p>
                </div>

                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input 
                  name={salesFields.email.name}
                  key={salesFields.email.key}
                  defaultValue={salesFields.email.initialValue}
                  placeholder="Email" />
                  <p className="text-red-500 text-sm">{salesFields.email.errors}</p>
                </div>
                <div className="grid space-y-2">
                  <Label>Question or problem</Label>
                  <Textarea
                    name={salesFields.message.name}
                    key={salesFields.message.key}
                    defaultValue={salesFields.message.initialValue}
                    className="h-32"
                    placeholder="Please share some details about your needs.."
                  />
                  <p className="text-red-500 text-sm">{salesFields.message.errors}</p>
                </div>
                {/* <Button type="submit">Submit</Button> */}
                <SubmitButton/>
              </form>
            </TabsContent>
            {/* Tab 2 */}
            <TabsContent value="support">
              <div className="text-foreground text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur, inventore atque earum nostrum corporis.
              </div>
              <form className="flex flex-col gap-y-4 mt-5">
              <input type="hidden" name="_gotcha"/>
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input className="" placeholder="Name"/>
                </div>
                <div className="grid space-y-1">
                  <Label>Email</Label>
                  <Input className="" placeholder="Email"/>
                </div>
                <div className="grid space-y-1">
                  <Label>Problem</Label>
                  <Textarea className="h-32" placeholder="What is wrong?"/>
                </div>
                <div className="grid space-y-1">
                  <Label>Asset</Label>
                  <Input type="file"/>
                </div>
                <Button>Submit</Button>
              </form>
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </section>
  );
}
