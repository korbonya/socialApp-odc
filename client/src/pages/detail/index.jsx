import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  if (!post) {
    return (
      <div>
        <svg
          className="animate-spin h-5 w-5 mr-3 text-red-800"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    );
  }

  return (
    <div className="container mx-auto w-full ">
      <img
        src="https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1256,height=628/https://prod.cdn-medias.jeuneafrique.com/medias/2018/09/27/27319hr_.jpg"
        alt=""
        className="w-full h-96 object-cover"
      />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-gray-800 font-bold text-xl text-left">
          {post.title}
        </h1>
        <p className="text-gray-600 mt-2">{post.body}</p>
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex items-center">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/723829372/display_1500/stock-vector-young-afro-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-723829372.jpg"
              alt="user"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-gray-700 font-bold ml-2">Mamadou Sow</h1>
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
            <p className="text-gray-600">12/12/2021</p>
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
            <p className="text-gray-600">12,8k</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-gray-800 font-bold text-xl text-left ml-4">
          Commentaires
        </h1>
        <div className="flex flex-col items-center justify-center p-4">
            <div className="flex flex-col">
            <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_1280.png"
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-gray-700 font-bold ml-2">Mamadou Sow</h1>
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
              <p className="text-gray-600">12/12/2021</p>
            </div>
          
          </div>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            </div>
            <div className="flex flex-col">
            <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_1280.png"
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-gray-700 font-bold ml-2">Mamadou Sow</h1>
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
              <p className="text-gray-600">12/12/2021</p>
            </div>
          
          </div>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            </div>
            <div className="flex flex-col">
            <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_1280.png"
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-gray-700 font-bold ml-2">Mamadou Sow</h1>
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
              <p className="text-gray-600">12/12/2021</p>
            </div>
          
          </div>
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            </div>

            <form className="flex flex-col container max-w-lg mx-auto mt-4">
                <textarea className="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-gray-500" placeholder="Commenter"></textarea>
                <button className="bg-gray-600 hover:bg-gray-600 text-white font-bold py-2 rounded-lg mt-2">Commenter</button>
            </form>
        </div>
      </div>
    </div>
  );
}
