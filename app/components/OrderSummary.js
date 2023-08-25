import Image from 'next/image'
import iconMusic from '../images/icon-music.svg'

export default function OrderSummary() {
  return (
    <section className="flex h-auto flex-col  gap-7 rounded-b-3xl bg-very-pale-blue shadow-xl xs:gap-8">
      <article className="flex flex-col gap-4 px-7 pt-8 text-center xs:px-16 xs:pt-10">
        <h1 className="text-2xl font-black text-dark-blue xs:text-3xl">
          Order Summary
        </h1>
        <p className="text-body font-medium text-desaturated-blue xs:px-3">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </article>
      <section className="mx-5 flex flex-row items-center justify-between rounded-2xl bg-pale-blue/30 px-5 py-4 xs:mx-14 xs:px-8 xs:py-7">
        <section className="flex flex-row gap-3 xs:gap-6">
          <Image className="xs:h-14 xs:w-14" src={iconMusic} alt="Icon Music" />
          <div className="flex flex-col xs:gap-1">
            <h2 className="font-black text-dark-blue">Annual Plan</h2>
            <strong className="font-medium text-desaturated-blue">
              $59.99/year
            </strong>
          </div>
        </section>
        <div>
          <a
            href="#"
            className="font-bold text-bright-blue underline hover:text-bright-blue/75"
          >
            Change
          </a>
        </div>
      </section>
      <button className="mx-5 rounded-xl bg-bright-blue py-4 font-black text-pale-blue shadow-xl hover:bg-bright-blue/75 xs:mx-14">
        Proceed to Payment
      </button>
      <button className="mb-8 bg-very-pale-blue font-black text-desaturated-blue hover:text-dark-blue xs:mb-14">
        Cancel Order
      </button>
    </section>
  )
}
