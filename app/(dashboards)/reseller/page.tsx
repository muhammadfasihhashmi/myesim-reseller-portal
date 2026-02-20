import CarouselBanner from "@/components/dashboard/CarouselBanner";
import Statistics from "@/components/dashboard/Statistics";

export type searchParamsType = {
  [key: string]: string | string[] | undefined;
};

async function page({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  const { start_date, end_date } = await searchParams;
  const range = {
    start_date,
    end_date,
  };
  return (
    <section>
      <CarouselBanner />
      <div className="border-t border-muted-foreground/20"></div>
      <Statistics range={range} />
    </section>
  );
}

export default page;
