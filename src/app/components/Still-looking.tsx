"client"
import { Link } from "lucide-react";

export default function Still_Looking(){
    return(
        <div>
            <div className="flex flex-row justify-between px-1 lg:px-12">
                <p className="font-bold text-2xl">Still looking for this ?</p>
                <Link href="/" key="View All" > <p className="underline text-blue-700">View All</p> </Link>
            </div>
        </div>
    )
}