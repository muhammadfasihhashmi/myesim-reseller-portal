import CarouselBanner from "@/components/dashboard/CarouselBanner";
import Chart from "@/components/dashboard/Chart";
import Statistics from "@/components/dashboard/Statistics";

export type searchParamsType = {
  [key: string]: string | string[] | undefined;
};

async function page({
  searchParams,
}: {
  searchParams: Promise<searchParamsType>;
}) {
  return (
    <section>
      <CarouselBanner />
      <div className="border-t border-muted-foreground/20"></div>
      <Statistics searchParams={searchParams} />
      <Chart searchParams={searchParams} />
    </section>
  );
}

export default page;
