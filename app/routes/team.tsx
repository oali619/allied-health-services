import { employees } from '../constants'

export default function Team() {
    return (
        <section id="team">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Our Team</h2>
            <p>Meet the dedicated team of professionals who are here to help you find and maintain stable housing.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {employees.map((employee) => (
                <div key={employee.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <img className="h-24 w-24 rounded-full mx-auto" src={employee.img} alt="" />
                    <h3 className="text-lg font-bold leading-6 text-gray-900">{employee.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{employee.title}</p>
                    <p className="mt-1 text-sm text-gray-500">{employee.location}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
    )
}