"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [target, setTarget] = useState<number>(0);
  const isFinished: boolean = target === count;
  useEffect(() => {
    if (isFinished) {
      setCount(0);
      setTarget(0);
    }
  }, [isFinished]);
  return (
    <div className="flex  flex-col min-h-screen  gap-3 justify-center items-center space-x-3">
      <h1> Target {target}</h1>
      <Input
        value={target}
        onChange={(e) => setTarget(Number(e.target.value))}
        placeholder="Set Target"
        type="number"
        className="w-40"
      ></Input>
      <h1> Solved Problems {count}</h1>
      <Button className="" onClick={() => setCount(count + 1)}>
        Increase
      </Button>
      <h1>{isFinished ? "Suceesfully completed" : ""}</h1>
    </div>
  );
}
