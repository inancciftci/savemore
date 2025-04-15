import { ArrowRightToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="container min-h-[80vh] items-center mt-20 flex flex-col gap-10 justify-center">
      <div className="w-[300px] aspect-square relative">
        <Image
          src={"/hero.png"}
          fill
          alt="hero image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-h1">Take Control of Your Finances</h2>
        <h4 className="text-slate-400 text-h4">
          Track, Budget, and Save with Confidence
        </h4>
        <p className="text-sm text-slate-300 w-[500px] text-center">
          SaveMore helps you manage your money effortlessly. Track income and
          expenses, set personalized budgets, and reach your savings goals—all
          in one intuitive platform.
        </p>
        <Link
          href="/dashboard"
          className="bg-slate-300 flex items-center px-4 py-2 gap-4 w-[170px] text-black rounded-lg font-bold"
        >
          <ArrowRightToLine size={20} className="animate-pulse text-green" />{" "}
          Launch App
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
