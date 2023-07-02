"use client";

import { Check, Rocket, X } from "lucide-react";
import { Notification } from "./Notification";

export function Widget() {
  return (
    <div className="w-[448px] overflow-hidden rounded">
      {/* HEADER */}
      <div className="flex items-center justify-between bg-zinc-200 px-6 py-4 dark:bg-zinc-800">
        <span className="text-xl font-bold text-zinc-500 dark:text-iceWhite">
          Notificações
        </span>
        <button className="text-xs font-bold text-violet-500 hover:text-violet-400">
          MARCAR TODAS COMO VISTAS
        </button>
      </div>

      {/* RECENT SECTION */}
      <div>
        <div className="bg-zinc-400 px-5 py-2 text-sm font-medium text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
          Recentes
        </div>

        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.ActionButton icon={X} onClick={() => {}} />
              <Notification.ActionButton
                icon={Check}
                onClick={() => {}}
                className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
            <Notification.Actions>
              <Notification.ActionButton
                icon={Check}
                onClick={() => {}}
                className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
              />
            </Notification.Actions>
          </Notification.Root>
        </div>
      </div>

      {/* OLD SECTION */}
      <div>
        <div className="bg-zinc-400 px-5 py-2 text-sm font-medium text-zinc-100 dark:bg-zinc-950 dark:text-zinc-400">
          Antigas
        </div>

        <div className="divide-y-2 divide-zinc-400 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
          </Notification.Root>
        </div>
      </div>
    </div>
  );
}
