import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";

function Home() {
  const dispatch:any = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <>
      <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <Navbar />
        </div>
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
      </div>
    </>
  );
}
export default Home;
