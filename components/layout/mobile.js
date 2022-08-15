import Head from 'next/head'

export default function LayoutMobile({ 
  children, 
  header, 
  meta = {
    title: 'Taufik Arif "Work"',
    description: 'Website Taufik Arif "Work"',
  } 
}) {
  return (
    <div className="bg-zinc-50 font-quicksand">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[500px] mx-auto min-h-screen bg-white">
        <div className="min-h-[50px] p-app-padding sticky top-0 bg-white z-10">
          { header }
        </div>
        <div className="p-app-padding">
          { children }
        </div>
        <div className='p-4 font-medium text-center'>© 2022 Taufik Arif, All Rights Reserved</div>
      </div>
    </div>
  )
}