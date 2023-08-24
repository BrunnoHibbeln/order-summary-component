import OrderSummary from './components/OrderSummary'

export default function Home() {
  return (
    <main className="xs:w-[31rem] xs:h-min flex h-full w-full flex-col items-center justify-center rounded-3xl p-0 px-5 py-16">
      <section className="bg-hero xs:bg-top h-52 w-full rounded-t-3xl bg-cover bg-center bg-no-repeat"></section>
      <OrderSummary />
    </main>
  )
}
