import OrderSummary from './components/OrderSummary'

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center rounded-3xl p-0 px-5 py-16 xs:h-min xs:w-[31rem] ">
      <section className="h-52 w-full rounded-t-3xl bg-hero bg-cover bg-center bg-no-repeat xs:bg-top"></section>
      <OrderSummary />
    </main>
  )
}
