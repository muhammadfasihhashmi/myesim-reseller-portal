import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ChartSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>

      <CardContent className="space-y-6">
        <Skeleton className="h-40" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-4 w-20" />
      </CardFooter>
    </Card>
  );
}
