export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 fixed bottom-0 left-0 right-0">
      <div className="flex">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold leading-7 text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">Information</h2>
          <p>Address. 14704 Cheshire Ct. Dayton, MN 55327</p>
          <p>Hours. M-F 8:00am - 6:00pm</p>
          <p>Phone. 612-123-4567</p>
          <p>Email. mnalliedhs@gmail.com</p>
        </div>
        <div>
          <p>&copy; 2024 Allied Health Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}