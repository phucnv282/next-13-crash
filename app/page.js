"use client";
import { useState, useEffect } from "react";

import Courses from "@/app/components/Courses";
import Loading from "@/app/loading";
import CourseSearch from "@/app/components/CourseSearch";

function HomePage(props) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>Welocome to Traversy Media</h1>
      <CourseSearch
        getSearchResults={(results) => {
          setCourses(results);
        }}
      />
      <Courses courses={courses} />
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    <Link href={"/"}>Home</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={"/about"}>About</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href={"/about/team"}>Team</Link>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </div>
  );
}

export default HomePage;
