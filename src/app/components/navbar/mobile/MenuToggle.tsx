'use client';
import * as React from 'react';
import { Transition, Variants, motion } from 'framer-motion';

type Prop = {
  variants: Variants;
  d?: string;
  transition?: Transition;
  isOpen: boolean;
};

const Path = ({ variants, isOpen, d, transition }: Prop) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 1%, 38%)"
    strokeLinecap="round"
    variants={variants}
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    className="fill-primary"
  />
);

export const MenuToggle = ({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) => (
  <button className="w-12 h-12 text-primary" onClick={() => setOpen(!open)}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        isOpen={open}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        isOpen={open}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        isOpen={open}
      />
    </svg>
  </button>
);
