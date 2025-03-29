import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-[85vh] flex justify-center items-center">
      <div className="flex flex-col gap-10 items-center p-10 bg-[rgba(242,242,242,0.8)] w-[500px] max-w-[80%] dark:bg-[rgba(31,31,36,0.8)] rounded-lg">
        <h1 className="text-h1 w-full text-center">
          Take Control of Your Finances
        </h1>
        <p className="text-grey-500 text-center w-full">
          Track your income, expenses, and savings effortlessly with our
          intuitive finance tracker. Set budgets, monitor your spending, and
          gain insights into your financial habits—all in one place. Stay on top
          of your money and make smarter financial decisions with ease.{" "}
        </p>
        <Button className="cursor-pointer font-bold w-full py-6">
          Launch App
        </Button>
      </div>
    </div>
  );
}
