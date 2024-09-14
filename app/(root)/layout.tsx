import LeftSidebar from '@/components/LeftSidebar';
import RightSidebar from '@/components/RightSidebar';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />

        <section className="border-2 border-red-500 min-h-screen flex flex-1 flex-col px-4 sm:px-14">
          <div className="">
            <div>
              <Image src="" alt="" />
              MobileNav
            </div>
            <div>
              Toaster (notification popups)
              {children}
            </div>
          </div>
        </section>

        <RightSidebar />
      </main>
    </div>
  );
}
