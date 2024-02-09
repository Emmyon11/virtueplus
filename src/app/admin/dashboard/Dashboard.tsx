import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Overview } from './components/OverView';
import { RecentSales } from './components/RecentSales';
import { Metadata } from 'next';
import { getAllData } from '../action';
import { sortOrdersByMonth } from '@/helpers/sortByMonths';
import { getMonthName } from '@/lib/utils';
import TopCard from './components/TopCard';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.',
};

export default async function DashboardPage() {
  const d = new Date();
  let month = d.getMonth();
  const data = await getAllData();

  const montlyOrders = sortOrdersByMonth(data.orders);
  const recentMonth = montlyOrders[month + 1];

  const ordersArr = Object.keys(montlyOrders).map((index) => {
    return {
      name: getMonthName(parseInt(index)),
      sales: montlyOrders[parseInt(index)].reduce(
        (acc, curr) => acc + curr.total,
        0
      ),
    };
  });

  return (
    <>
      <div className=" mt-3 md:mt-0 flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <TopCard allData={data} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview data={ordersArr} />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made {recentMonth.length} sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales orders={recentMonth} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
