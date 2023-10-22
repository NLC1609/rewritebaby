import Head from 'next/head'
import Header from '../components/Header'
import Icon from "@material-tailwind/react/Icon"
import Button from "@material-tailwind/react/Button"
import { Image } from '@material-ui/icons';

export default function Home() {
  return (
    <div>
      <Head> 
        <title>ReWrite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className='text-gray-700 text-lg'>Start a new document</h2>

            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            <Image src='https://link.papareact.com/pju' layout='fill' />
          </div>
        </div>
      </section>
    </div>
  );
}
