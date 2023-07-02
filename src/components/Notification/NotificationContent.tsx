interface NotificationContentProps {
  text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
        {text}
      </p>
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <span>Convite</span>
        <span>&#x2022;</span>
        <span>há 3 minutos</span>
      </div>
    </div>
  );
}
