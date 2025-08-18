'use client';

import { Minus, Plus, RotateCw } from "lucide-react";
import { useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0);

    const addBtn = () => {
       return setNumber((prev) => prev + 1);
    }

    const subtractBtn = () => {
        if (number > 0) {
          return setNumber(number - 1);  
        }
    }

    return(
        <div className="section-wrapper flex gap-4 items-end justify-center">
            <button aria-labels="Minus Button" className={`${number===0? "cursor-not-allowed bg-neutral-300 text-neutral-200": "cursor-pointer"} rounded-full bg-neutral-200 p-4 hover:bg-neutral-300`} onClick={subtractBtn}><Minus/></button>
            <output aria-live="polite" className="py-4 px-6 rounded-md !text-lg border">{number}</output>
            <button aria-labels="Plus Button" className="rounded-full bg-neutral-200 p-4 hover:bg-neutral-300 cursor-pointer" onClick={addBtn}><Plus/></button>
            <button aria-labels="Reset Button" className="rounded-full bg-neutral-200 h-fit p-3 hover:bg-neutral-300 cursor-pointer" onClick={() => setNumber(0)}><RotateCw size={18}/></button>
        </div>
    );
}