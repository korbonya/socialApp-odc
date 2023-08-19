import { Link } from "react-router-dom";
export default function PostCard(props) {
  const { title, body, id, image, userName, userImage, likes, date } = props;
  return (
    <div>
      <Link to={`/detail/${id}`}>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt="post" className="w-full h-56 object-cover" />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-gray-800 font-bold text-xl text-left">{title}</h1>
          <p className="text-gray-600 mt-2">{body}</p>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center">
              <img
                src={userImage}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-gray-700 font-bold ml-2">{userName}</h1>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="text-gray-600">{date}</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 9a6 6 0 00-6-6m6 0a6 6 0 00-6 6m6 0v6m-6 0a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
              <p className="text-gray-600">{likes}</p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
