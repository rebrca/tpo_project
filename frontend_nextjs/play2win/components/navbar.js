
import Link from 'next/link'

export default function navbar() {
  return (
    <div class="bg-blue-500 p-3">

      <div className="flex justify-between">
        <div className="h2">Logo</div>
        <div className="block lg:flex">

          <div className="px-2"> 
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="px-2"> 
            <Link href="/games">
              <a>all games</a>
            </Link>
          </div>
          <div className="px-2"> 
            <Link href="/info">
              <a>contact info</a>
            </Link>
          </div>
         

        </div>
      </div>

    </div>
  )
}
