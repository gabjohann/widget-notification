import { ButtonHTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}
export function NotificationActionButton({
  icon: Icon,
  ...rest
}: NotificationActionButtonProps) {
  return (
    <button
      {...rest} // estende todas as propriedades de botão do HTML
      className={twMerge(
        "flex h-8 w-8 items-center justify-center rounded bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700",
        rest.className
      )}
    >
      <Icon className="h-3 w-3 text-zinc-50" />
    </button>
  );
}
