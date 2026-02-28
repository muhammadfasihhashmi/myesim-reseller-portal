"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, isValid, parseISO, subDays } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { type DateRange } from "react-day-picker";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const durationsPreSet = [
  {
    label: "Today",
    value: "today",
  },
  {
    label: "Yesterday",
    value: "yesterday",
  },
  {
    label: "Last 7 days",
    value: "7",
  },
  {
    label: "Last 14 days",
    value: "14",
  },
  {
    label: "Last 30 days",
    value: "30",
  },
];

const D = new Date();
const toDay = new Date(D.getFullYear(), D.getMonth(), D.getDate());

export function DatePickerFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, setTransition] = useTransition();

  const start = searchParams.get("start_date");
  const end = searchParams.get("end_date");

  const [date, setDate] = useState<DateRange | undefined>(() => {
    if (start && end) {
      const s = parseISO(start);
      const e = parseISO(end);
      if (isValid(s) && isValid(e)) {
        return {
          from: s,
          to: e,
        };
      }
    }
    return { from: toDay, to: toDay };
  });

  useEffect(() => {
    if (!start || !end) return;

    const s = parseISO(start);
    const e = parseISO(end);

    if (!isValid(s) || !isValid(e)) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("start_date");
      params.delete("end_date");
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [searchParams, pathname, router, start, end]);

  const updateParams = () => {
    if (!date?.from || !date?.to) return;
    const params = new URLSearchParams(searchParams.toString());
    const fromISO = format(date.from, "yyyy-MM-dd");
    const toISO = format(date.to, "yyyy-MM-dd");
    params.set("start_date", fromISO);
    params.set("end_date", toISO);

    setTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  useEffect(() => {
    if (!isPending) {
      setTimeout(() => setOpen(false), 0);
    }
  }, [isPending]);

  const clearParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("start_date");
    params.delete("end_date");
    setDate({ from: toDay, to: toDay });
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  function handleDurationPreSet(value: string) {
    switch (value) {
      case "today":
        setDate({
          from: toDay,
          to: toDay,
        });
        break;
      case "yesterday":
        setDate({
          from: subDays(toDay, 1),
          to: subDays(toDay, 1),
        });
        break;
      case "7":
        setDate({
          from: subDays(toDay, 6),
          to: toDay,
        });
        break;
      case "14":
        setDate({
          from: subDays(toDay, 13),
          to: toDay,
        });
        break;
      case "30":
        setDate({
          from: subDays(toDay, 29),
          to: toDay,
        });
        break;

      default:
        break;
    }
  }
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
                {durationsPreSet.map((dur, ind) => (
                  <Button
                    key={ind}
                    variant={"ghost"}
                    onClick={() => handleDurationPreSet(dur.value)}
                    className="cursor-pointer"
                  >
                    {dur.label}
                  </Button>
                ))}
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
                {isPending ? (
                  <>
                    updating
                    <Loader2 className="animate-spin" />
                  </>
                ) : (
                  "update"
                )}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </Field>
  );
}
