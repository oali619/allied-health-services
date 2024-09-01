import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { testimonials } from '../constants'
import apartmentImg from '../images/apartment.jpg'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="min-h-full">
        <main>
          <section>
            <div className="flex flex-col sm:flex-row mt-20">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 content-center">
                  <h1 className="text-7xl font-bold tracking-tight text-gray-900">Allied Health Services</h1>
                  <p className="text-3xl text-right">Ensuring Stable Housing for Everyone</p>
                </div>
                <img className="rounded-lg sm:mr-4" src={apartmentImg} alt="Housing" />
            </div>
          </section>

          <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8">
            <section className="flex flex-col sm:flex-row">
              <div className="flex-1">
                <h2 className="text-5xl font-bold text-gray-900">Housing Stabilization Services</h2>
                <p className="sm:w-1/2">Housing Stabilization Services is a new Minnesota Medical Assistance benefit to help people with disabilities, including mental illness and substance use disorder, and seniors find and keep housing.</p>             
              </div>
              <div className="flex-1">
                <p>Minnesota supports people with disabilities to live, work, and play in communities of their choice. Various challenges and barriers can make it hard to find housing, budget, interact with landlords and neighbors, and understand the rules of a lease. Finding and keeping stable affordable housing is important to the health of Minnesotans. Housing Stabilization Services is a new Medical Assistance benefit designed to help people with disabilities and seniors find and keep housing. Housing Stabilization Services is a home and community-based service.</p>
              </div>
              <div>
              <div>
                <p>Know anyone in need of housing support? We want to hear form you!</p>
                <Link to="/referral" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Refer Client</Link>
              </div>
              </div>
            </section>


            <section id="successStories">
              <h2 className="text-5xl font-bold text-gray-900">Success Stories</h2>
              <div className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="mx-auto max-w-2xl lg:max-w-4xl">
                      <figure className="mt-10">
                        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                          <p>{testimonial.quote}</p>
                        </blockquote>
                        <figcaption className="mt-10">
                          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div className="font-semibold text-gray-900">{testimonial.client}</div>
                            <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                              <circle r={1} cx={1} cy={1} />
                            </svg>
                            <div className="text-gray-600">{testimonial.location}</div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
