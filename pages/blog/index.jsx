import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { BsSearch } from "react-icons/bs";
function index() {
  return (
    <div>
      <Header index={4} />
      <div
        className="section-header w-full px-32 py-[140px] bg-green-900 flex items-center justify-center"
        style={{
          backgroundImage: `url("https://vjmglobal.com/wp-content/uploads/2021/08/Main-BG.png")`,
          backgroundSize: "cover",
        }}
      >
        <div className="section-header-content flex flex-col items-center gap-8">
          <h1 className="text-white text-4xl">Archives</h1>
          <div className="w-[760px] flex h-[42px]">
            <input
              type="text"
              className="flex-1 h-full px-3"
              placeholder="Search topic..."
            />
            <button
              type="submit"
              className="px-3 py-3 bg-primary w-[115px] rounded-r-md flex items-center justify-center"
            >
              <BsSearch className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="container px-32 py-16 grid grid-cols-3 gap-12">
        <div className="blogs-section flex flex-col items-start gap-6 col-span-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="blog-aside">
          <div className="category-header">
            <h3 className="text-2xl mb-3">Categories</h3>
            <select name="" id="" className="w-full h-12 border rounded-md">
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              <option value="4">Category 4</option>
            </select>
          </div>
          <div className="recent-post-section my-3">
            <ul>
              <li>
                <a href="#">Post 1</a>
              </li>
              <li>
                <a href="#">Post 2</a>
              </li>
              <li>
                <a href="#">Post 3</a>
              </li>
              <li>
                <a href="#">Post 4</a>
              </li>
              <li>
                <a href="#">Post 5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
