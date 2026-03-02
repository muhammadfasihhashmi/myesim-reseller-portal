"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
  subWeeks,
} from "date-fns";
import { CalendarIcon, Check } from "lucide-react";
import { type DateRange } from "react-day-picker";
import { useState } from "react";
import { useQueryStates, parseAsIsoDate } from "nuqs";
import { useFilterPending } from "@/context/FilterPendingContext";

const D = new Date();
const toDay = new Date(D.getFullYear(), D.getMonth(), D.getDate());

const durationsPreSet = [
  { label: "Today", from: toDay, to: toDay },
  { label: "Yesterday", from: subDays(toDay, 1), to: subDays(toDay, 1) },
  { label: "Last 7 days", from: subDays(toDay, 6), to: toDay },
  { label: "Last 14 days", from: subDays(toDay, 13), to: toDay },
  { label: "Last 30 days", from: subDays(toDay, 29), to: toDay },
  {
    label: "This week",
    from: startOfWeek(toDay, { weekStartsOn: 1 }),
    to: toDay,
  },
  {
    label: "Last week",
    from: startOfWeek(subWeeks(toDay, 1), { weekStartsOn: 1 }),
    to: endOfWeek(subWeeks(toDay, 1), { weekStartsOn: 1 }),
  },
  { label: "This month", from: startOfMonth(toDay), to: toDay },
  {
    label: "Last month",
    from: startOfMonth(subMonths(toDay, 1)),
    to: endOfMonth(subMonths(toDay, 1)),
  },
];

function isPresetActive(
  preset: { from: Date; to: Date },
  date: DateRange | undefined,
) {
  if (!date?.from || !date?.to) return false;
  return isSameDay(preset.from, date.from) && isSameDay(preset.to, date.to);
}

export function DatePickerFilter() {
  const [open, setOpen] = useState(false);
  const { startTransition } = useFilterPending();
  const [{ start_date, end_date }, setRange] = useQueryStates(
    {
      start_date: parseAsIsoDate,
      end_date: parseAsIsoDate,
    },
    { shallow: false },
  );

  const [date, setDate] = useState<DateRange | undefined>({
    from: start_date ?? toDay,
    to: end_date ?? toDay,
  });

  const updateParams = () => {
    if (!date?.from || !date?.to) return;
    startTransition(() => {
      setRange({
        start_date: date.from,
        end_date: date.to,
      });
    });
    setOpen(false);
  };

  const clearParams = () => {
    setDate({ from: toDay, to: toDay });
    setRange({ start_date: null, end_date: null });
    setOpen(false);
  };

  return (
    <Field className="w-63">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date-picker-range"
            className="justify-start px-2.5 font-normal"
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <span className="font-semibold">
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </span>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-5" align="start">
          <div className="flex flex-col gap-5">
            <div className="flex gap-16">
              <Calendar
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                className="p-0"
              />
              <div className="flex flex-col gap-3">
                {durationsPreSet.map((dur, ind) => {
                  const active = isPresetActive(dur, date);
                  return (
                    <div key={ind} className="flex items-center gap-1">
                      <div className="w-4 h-4 flex items-center justify-center shrink-0">
                        {active && <Check size={14} className="text-primary" />}
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => setDate({ from: dur.from, to: dur.to })}
                        className="cursor-pointer"
                      >
                        {dur.label}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-x-3 self-end">
              <Button
                onClick={clearParams}
                variant={"secondary"}
                className="cursor-pointer"
              >
                clear
              </Button>
              <Button onClick={updateParams} className="cursor-pointer">
                update
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </Field>
  );
}
