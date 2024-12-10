// import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-center px-5">
      <h1 className="text-4xl font-bold mb-7">Contact us</h1>
      <Card className="max-w-[500px] w-full">
        <Tabs defaultValue="sales">
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
              <form className="flex flex-col gap-y-4 mt-5">
                <div className="grid space-y-1">
                  <Label>Name</Label>
                  <Input placeholder="Input Name" />
                </div>
                <div className="grid space-y-1">
                  <Label >Email</Label>
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="grid space-y-2">
                  <Label>Question or problem</Label>
                  <Textarea className="h-32" placeholder="Please share some details about your needs.."/>
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
