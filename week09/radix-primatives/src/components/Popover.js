'use client'
import * as Popover from '@radix-ui/react-popover';
import './popover.css'

export default function PopoverComponent() {
    return (
        <Popover.Root>
        <Popover.Trigger className="PopoverTrigger">More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent" side='right'>
            Some more info…
            <Popover.Arrow className="PopoverArrow"/>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
}