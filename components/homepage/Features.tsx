import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const features = [
  {
    id: 1,
    title: "💰 Comprehensive Dashboard",
    description:
      "Get a complete view of your finances at a glance with our intuitive dashboard. See your total balance, recent transactions, savings progress, and budget status all in one place.",
  },
  {
    id: 2,
    title: "📊 Smart Budgeting",
    description:
      "Create custom budgets for different spending categories. Our powerful tracking tools help you stay within your limits and make informed spending decisions.",
  },
  {
    id: 3,
    title: "🏦 Saving Pots",
    description:
      "Create dedicated savings pots for specific goals like vacations, emergencies, or major purchases. Watch your savings grow and track your progress toward your targets.",
  },
  {
    id: 4,
    title: "📝 Transaction Tracking",
    description:
      "Easily log and categorize all your transactions. Gain insights into your spending patterns with detailed breakdowns and visualizations.",
  },
  {
    id: 5,
    title: "💸 Recurring Bills Management",
    description:
      "Never miss a payment again. Track your recurring bills, get reminders when they're due, and maintain a clear view of your monthly obligations.",
  },
];

const Features = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="w-full aspect-square relative rounded-lg overflow-hidden">
          <Image
            fill
            src={"/features.png"}
            alt="features image"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-h1 uppercase text-accent tracking-widest">
            Key Features
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {features.map((feature, index: number) => (
              <AccordionItem value={`item-${index + 1}`} key={feature.id}>
                <AccordionTrigger className="font-bold text-xl cursor-pointer text-primary">
                  {feature.title}
                </AccordionTrigger>
                <AccordionContent className="text-secondary">
                  {feature.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Features;
