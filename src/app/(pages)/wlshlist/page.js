"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { GetGamesbyId } from "@/lib/api";
import { useWishlist } from "@/Components/wlshlist/wlshlist";

function Page() {
  const { wishlist, removeGame } = useWishlist();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.to(".slides" , {
      autoAlpha : 1 ,
      y : 0 ,
      stagger : 0.2  // ✅ كل card تظهر بعد الثانية بـ 0.2s
    })
},[games])


  useEffect(() => {
    let isMounted = true;

    const loadWishlistGames = async () => {
      if (!wishlist.length) {
        setGames([]);
        return;
      }

      setLoading(true);
      try {
        const details = await Promise.all(wishlist.map((id) => GetGamesbyId(id)));
        if (isMounted) {
          setGames(details.filter(Boolean));
        }
      } catch (error) {
        console.error("Failed to fetch wishlist games:", error);
        if (isMounted) {
          setGames([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadWishlistGames();
    return () => {
      isMounted = false;
    };
  }, [wishlist]);

  return (
    <div className="m-10">
      <h1 className="text-[2.5rem] font-bold text-white">My WishList 💖</h1>

      {!loading && games.length === 0 && (
        <div className="flex flex-col justify-center items-center h-100">
          <h1 className="text-white mt-4 text-[1.5rem] font-bold slides invisible translate-y-4">You have not added anything to your wishlist yet !</h1>
          <Link href={`/games`} className="text-red-950 text-[1.3rem]  border-red-950 hover:border-b-2 slides invisible translate-y-4"><p>Browse More Games</p></Link>
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-64 rounded-2xl bg-white/10 animate-pulse slides invisible translate-y-4" />
          ))}
        </div>
      )}

      {!loading && games.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {games.map((game) => (
            <div key={game.id} className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden slides invisible translate-y-4">
              <div className="relative w-full h-44">
                <Image
                  src={game.background_image || "/images/games/imge1.webp"}
                  alt={game.name || "Game cover"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <Link href={`/games/${game.id}`} className="text-white font-bold text-lg hover:text-[#ff7878]">
                  {game.name}
                </Link>
                <p className="text-white/70 text-sm mt-1">Rating: {game.rating ?? "N/A"} star</p>
                <button
                  onClick={() => removeGame(game.id)}
                  className="mt-4 px-4 py-2 rounded-full bg-[#ff7878] text-white font-semibold hover:opacity-90 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
