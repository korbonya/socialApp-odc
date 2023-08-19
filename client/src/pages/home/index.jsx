import { useState, useEffect } from "react";

import Title from "../../components/title";
import PrimaryBtn from "../../components/primaryBtn";
import SecondaryBtn from "../../components/secondaryBtn";
import PostCard from "../../components/postCard";
import TextField from "../../components/textField";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [])


  return (
    <div className=" min-h-screen w-full overflow-hidden">
      <header className="container mx-auto flex justify-between">
        <Title style={'!text-gray-600'} title="Bienvenu sur notre reseau social" />
        <div className="flex space-x-4">
            <SecondaryBtn 
            onClick={() => navigate('/signup')}
            title="s'inscrire" />
            <PrimaryBtn 
            onClick={() => navigate('/signin')}
            title="se connecter" />
        </div>
      </header>
      <main className="container mx-auto grid  md:grid-cols-3 gap-4 my-8">
        <section className="lg:col-span-2 md:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {posts.length > 0 ? posts.map(post => <PostCard 
            key={post.id}
            title={post.title}
            body={post.body}
            image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/161168091.jpg?k=5f9c3290524e9584405ae94039b8bd0436d3725fbe2d17e61cc5167b52f773ff&o=&hp=1"
            userName="Marima Soumah"
            userImage="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
            likes={10}
            id={post.id}
            date="il y a 2 jours"
            />) : <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto animate-spin text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9a2 2 0 114 0H8z" clipRule="evenodd" />
                </svg>

            </div>

          }
           
        </section>
        <aside className="px-10  rounded-xl py-10">
            <h1 className="text-2xl font-bold text-center pb-5 ">Ajouter une publication</h1>
            <form action="" className="space-y-4">
                <TextField type="text" placeholder="titre" labelStyle={"text-black"}  inputStyle={"bg-transparent border-2 border-gray-600 rounded-lg"}  />
                <textarea name="" id=""  rows="10" placeholder="contenu" className="border-2 border-gray-800 rounded-lg p-2 w-full"></textarea>
                <input type="file" className="" />
                <PrimaryBtn title="publier" />
            </form>
        </aside>
      </main>
      <footer className="container mx-auto">footer</footer>
    </div>
  );
}
