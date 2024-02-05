'use Client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDrawerState } from '@/utils/store';

export function DrawerAndDialog({
  buttonText,
  children,
  className,
}: {
  buttonText: string | React.ReactNode;
  children: React.ReactNode;
  className: string;
}) {
  const [open, setOpen] = React.useState(false);
  const drawerState = useDrawerState((state) => state.open);
  const openDrawer = useDrawerState((state) => state.openDrawer);
  const closedrawer = useDrawerState((state) => state.closeDrawer);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog
        open={drawerState}
        onOpenChange={drawerState ? closedrawer : openDrawer}
      >
        <DialogTrigger asChild>
          <Button className={cn(className)} asChild>
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <h1>Edit profile</h1>
            </DialogTitle>
            <DialogDescription>
              <p>
                {
                  "Make changes to your profile here. Click save when you're done."
                }
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="">{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="sm" className={cn(className)} asChild>
          {buttonText}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-6">
        <DrawerHeader className="text-left">
          <DrawerTitle>
            <h1>Edit</h1>
          </DrawerTitle>
          <DrawerDescription>
            <p>
              {
                "Make changes to your profile here. Click save when you're done."
              }
            </p>
          </DrawerDescription>
        </DrawerHeader>
        <div className="">{children}</div>

        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">
              <h1>Cancel</h1>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
