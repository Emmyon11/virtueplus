import { Card, CardContent } from '@/components/ui/card';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaResearchgate } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';

const services = [
  {
    name: 'Training',
    icon: <GiTeacher size={67} />,
    description: `We carry out training needs assessments and design and develop curricula and training materials that are customized to the specific needs of our clients.`,
  },
  {
    name: 'Business Development Services (BDS)',
    icon: <FaProjectDiagram size={67} />,
    description: `VIRTUEPLUS2 plays facilitator and provider of BDS to MSEs, particularly in areas of linkage to financial institutions, access to markets and technical training of entrepreneurs.`,
  },
  {
    name: 'Research',
    icon: <FaResearchgate size={67} />,
    description: `As part of the process of documenting knowledge, VIRTUEPLUS2 carries out research, market surveys and baseline surveys not only in microfinance and MSE sectors but also other sectors that indirectly contributes towards poverty alleviation and national development. VIRTUEPLUS2 has over the years developed a detailed research methodology that ensures high quality results.`,
  },
];

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
          {services.map((service) => {
            return (
              <Card
                key={service.name}
                className="rounded-sm cursor-pointer min-h-72 flex items-center justify-center"
              >
                <CardContent className="p-4 ">
                  <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="text-green_custom">{service.icon}</div>

                    <div className="text-2xl capitalize font-semibold">
                      {service.name}
                    </div>
                    <div className="text-sm text-primary/75">
                      {service.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default Items;
