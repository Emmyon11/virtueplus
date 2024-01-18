import { Card, CardContent } from '@/components/ui/card';
import { GiTeacher } from 'react-icons/gi';

const Items = () => {
  return (
    <main>
      <div className="grid p-4">
        <div className="flex items-center gap-2">
          <div className="tracking-widest uppercase font-semibold text-gray-400">
            Services
          </div>
          <hr className="w-20 h-0.5 bg-orange-300 border-0 rounded " />
        </div>

        <div className="uppercase text-3xl font-bold">Check our services</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
          <Card className="rounded-sm cursor-pointer min-h-72 flex items-center justify-center">
            <CardContent className="p-4 ">
              <div className="flex flex-col gap-3 items-center justify-center">
                <GiTeacher size={67} className="text-green_custom" />
                <div className="text-2xl font-semibold">Training</div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis accusamus laborum, reprehenderit, architecto
                  consequuntur omnis voluptas corrupti delectus magnam eius odio
                  quo assumenda labore alias doloribus temporibus? Voluptas,
                  iste rem.
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-sm cursor-pointer min-h-72 flex items-center justify-center">
            <CardContent className="p-4 ">
              <div className="flex flex-col gap-3 items-center justify-center">
                <GiTeacher size={67} className="text-green-400" />
                <div className="text-2xl font-semibold">Training</div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis accusamus laborum, reprehenderit, architecto
                  consequuntur omnis voluptas corrupti delectus magnam eius odio
                  quo assumenda labore alias doloribus temporibus? Voluptas,
                  iste rem.
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-sm cursor-pointer min-h-72 flex items-center justify-center">
            <CardContent className="p-4 ">
              <div className="flex flex-col gap-3 items-center justify-center">
                <GiTeacher size={67} className="text-green_custom" />
                <div className="text-2xl font-semibold">Training</div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis accusamus laborum, reprehenderit, architecto
                  consequuntur omnis voluptas corrupti delectus magnam eius odio
                  quo assumenda labore alias doloribus temporibus? Voluptas,
                  iste rem.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default Items;
