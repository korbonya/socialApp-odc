import { Link } from "react-router-dom";

export default function LinkTo(
   { text, target, link }
) {
   return (
      <div className="text-center text-xl font-bold text-white mt-4">
         {text}
         <Link className="underline ml-2" to={target}>
            {link}
         </Link>
      </div>
   )
}
