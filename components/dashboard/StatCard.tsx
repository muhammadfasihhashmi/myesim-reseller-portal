import { LucideIcon } from "lucide-react";

export type StatCard = {
  title: string;
  amount: number;
  iconName: LucideIcon;
  iconColor: string;
  bgColor: string;
};

function StatCard({ stat }: { stat: StatCard }) {
  const { title, amount, iconName, iconColor, bgColor } = stat;

  const Icon = iconName;

  return (
    <div className="border border-border bg-card p-3.5 flex justify-between items-center rounded-2xl">
      <div className="flex flex-col gap-2.5">
        <p className="text-tiny text-card-foreground/65">{title}</p>
        <span className="font-semibold text-h2">{amount}</span>
      </div>

      <div className={`${bgColor} rounded-full p-1.5 self-start`}>
        {Icon && <Icon size={23} color={iconColor} />}
      </div>
    </div>
  );
}
export default StatCard;
