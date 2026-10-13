import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import { setLoading, setError, setResults, saveToCache, } from "../redux/features/searchSlice";

import ReduxCard from "./ReduxCard";


const ReduxGrid = () => {
  const dispatch = useDispatch();

  const {
    query,
    activeTab,
    results,
    loading,
    error,
    cache,
  } = useSelector((store) => store.search);

  useEffect(() => {
    if (!query) return;
    if (loading) return;
    const cacheKey = `${activeTab}_${query}`;

    // CACHE CHECK
    if (cache[cacheKey]) {
      dispatch(setResults(cache[cacheKey]));
      return;
    }

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab === "photo") {
          const res = await fetchPhotos(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "Photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }

        if (activeTab === "video") {
          const res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }

        if (activeTab === "gif") {
          const res = await fetchGIF(query);
          data = res.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.images.fixed_width_small.url,
            src:
              item.images.original_mp4?.mp4 ||
              item.images.fixed_width.mp4,
          }));
        }

        // SAVE TO CACHE
        dispatch(saveToCache({ key: cacheKey, data }));
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  // MEMOIZED RENDER
  const renderedItems = useMemo(() => {
    return results.map((item) => (
      <ReduxCard key={item.id} item={item} />
    ));
  }, [results]);

  if (error) return <h1 className="text-red-500 flex justify-center text-3xl font-semibold m-50">Error loading data</h1>;

  if (loading) return <h1 className="text-gray-600 flex justify-center text-3xl font-semibold m-50">Loading...</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-5 px-5 py-6 h-fit">
      {renderedItems}
    </div>
  );
};

export default ReduxGrid;