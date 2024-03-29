"use client";

import type { Metadata } from "next";
// import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import FeaturedPost from "../_components/posts/FeaturedPost";
import Pagination from "../_components/UI/Pagination";
// import { getAllPosts } from "../_lib/post-utils";
import { Post } from "../_types/interfaces";
import { formatDate } from "../_lib/post-utils";
import PostCard from "../_components/posts/PostCard";
type PostsData = {
  posts: { data: Post[] };
};

type SetStatePostArr = React.Dispatch<React.SetStateAction<PostsData>>;

export const metadata: Metadata = {
  title: "Blog | EdgeInBusiness",
  description:
    "Empower your entrepreneurial journey with EdgeInBusiness – Your go-to resource for new business owners. Explore strategic planning, marketing, finance, legal insights & more. Join our community for actionable guides and real-life success stories. Conquer challenges, savor triumphs, and build wealth with knowledge. Welcome to EdgeInBusiness",
};

const Blog = ({ posts }: PostsData) => {
  const [recordsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPost, setFeaturedPost] = useState<any>();
  const [allPosts, setAllPosts] = useState<any[]>();
  const [currentPosts, setCurrentPosts] = useState<any[]>();

  const sortedBlogPosts = posts.data.sort((a, b) => {
    const dateA = new Date(a.dateModified);
    const dateB = new Date(b.dateModified);

    return +dateB - +dateA;
  });

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const numberPages = Math.ceil((sortedBlogPosts.length - 1) / recordsPerPage);
  useEffect(() => {
    setFeaturedPost(sortedBlogPosts[0]);
    setAllPosts(sortedBlogPosts.slice(1));
  }, [sortedBlogPosts]);

  useEffect(() => {
    if (allPosts) {
      setCurrentPosts(
        allPosts.slice(
          indexOfFirstRecord,
          indexOfLastRecord > allPosts.length
            ? allPosts.length
            : indexOfLastRecord
        )
      );
    }
  }, [allPosts, indexOfFirstRecord, indexOfLastRecord]);

  return (
    <Fragment>
      {featuredPost && (
        <FeaturedPost featuredPost={featuredPost} formatDate={formatDate} />
      )}
      <div className="container">
        <div className="title">
          <h1>Latest Articles</h1>
        </div>

        <ul className="list">
          {currentPosts ? (
            currentPosts.map((post) => {
              return <PostCard post={post} key={post._id} />;
            })
          ) : (
            <p>Loading....</p>
          )}
        </ul>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberPages={numberPages}
        />
      </div>
    </Fragment>
  );
};

export default Blog;
